import { createAction, props } from '@ngrx/store';
import { Article } from '../model/article.model';

export const loadArticles = createAction(
  '[Articles] Load'
)

export const setArticles = createAction(
  '[Articles API] Articles Loaded Success',
  props<{articles: Article[]}>()
)

export const selectArticle = createAction(
  '[Article] Selected',
  props<{articleId: string}>()
)

export const articleActions = {
  loadArticles,
  selectArticle,
  setArticles
}