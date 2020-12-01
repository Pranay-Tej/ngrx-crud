import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { articleActions } from '../../store/article.actions';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  createArticle(title: string, description: string){
    this.store.dispatch(articleActions.createArticle({title, description}))
  }

}
