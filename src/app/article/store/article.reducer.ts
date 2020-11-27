import { from } from 'rxjs';
import { createReducer, on } from '@ngrx/store'
import { Article } from '../model/article.model';
import { articleActions } from './article.actions';

export interface ArticleState {
  articleList: Article[],
  selectedArticle: string
}

export const initialState:ArticleState = {
  articleList: [],
  selectedArticle: null
}

export const articleReducer = createReducer(
  initialState,
  on(articleActions.selectArticle, (state, {articleId}) => ({...state, selectedArticle: articleId})),
  on(articleActions.setArticles, (state, {articles}) => ({...state, articleList: articles}))
)

// export function articleReducer (state, action) {
//   return _articleReducer(state, action)
// }