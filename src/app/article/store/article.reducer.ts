import { from } from 'rxjs';
import { createReducer, on } from '@ngrx/store'
import { Article } from '../model/article.model';
import { articleActions } from './article.actions';

export interface ArticleState {
  articleList: Article[],
  selectedArticle: Article
}

export const initialState:ArticleState = {
  articleList: [],
  selectedArticle: null
}

export const articleReducer = createReducer(
  initialState,
  on(articleActions.setArticle, (state, {selectedArticle}) => ({...state, selectedArticle: selectedArticle})),
  on(articleActions.setArticleList, (state, {articleList}) => ({...state, articleList: articleList}))
)

// export function articleReducer (state, action) {
//   return _articleReducer(state, action)
// }