import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectedArticle } from '../../store/article.selectors';
import { Article } from '../../model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.article$ = this.store.select(selectedArticle);
  }

}
