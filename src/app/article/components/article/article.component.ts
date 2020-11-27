import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { getSelectedArticle } from '../../store/article.selectors';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.article$ = this.store.select(getSelectedArticle);

  }

}
