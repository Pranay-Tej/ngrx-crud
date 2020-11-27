import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from '../services/article.service';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { articleActions } from './article.actions';
import { Article } from '../model/article.model';

@Injectable()
export class ArticleEffects {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Articles] Load'),
      mergeMap(() =>
        this.articleService.getAll().pipe(
          // map(articles => articles.data),
          switchMap((articles: Article[]) => {
            return [articleActions.setArticles({ articles })];
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  setArticle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Article] Selected'),
        map((action: any) => action.articleId),
        tap((articleId) => console.log(articleId))
      ),
    { dispatch: false }
  );
}
