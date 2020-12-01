import { createAction, props } from '@ngrx/store';
import { Article } from '../model/article.model';

export const loadArticleList = createAction(
  '[Articles] Load Article List'
)

export const setArticleList = createAction(
  '[Articles API] Article List Load Success',
  props<{articleList: Article[]}>()
)

export const loadArticle = createAction(
  '[Article] Load Article',
  props<{articleId: string}>()
)

export const setArticle = createAction(
  '[Article] Article Load Success',
  props<{selectedArticle: Article}>()
)

export const createArticle = createAction(
  '[Article] Create Article',
  props<{title: string, description: string}>()
)

export const articleActions = {
  loadArticleList,
  setArticleList,
  loadArticle,
  setArticle,
  createArticle
}