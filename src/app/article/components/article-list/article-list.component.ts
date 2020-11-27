import { selectArticle } from './../../store/article.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Article } from '../../model/article.model';
import { getAllArticles } from '../../store/article.selectors';
import { articleActions } from '../../store/article.actions';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles$ : Observable<Article[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(articleActions.loadArticles())
    this.articles$ = this.store.select(getAllArticles);
  }

  selectArticle(articleId){
    this.store.dispatch(articleActions.selectArticle({articleId}))
  }

}
