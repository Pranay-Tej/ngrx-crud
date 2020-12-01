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

  loadArticleList$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Articles] Load Article List'),
      mergeMap(() =>
        this.articleService.getAll().pipe(
          // map(articles => articles.data),
          switchMap((articleList: Article[]) => {
            return [articleActions.setArticleList({ articleList })];
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Article] Load Article'),
      mergeMap((action: any) =>
        this.articleService.getById(action.articleId).pipe(
          // map(articles => articles.data),
          switchMap((selectedArticle: Article) => {
            return [articleActions.setArticle({ selectedArticle })];
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

}
