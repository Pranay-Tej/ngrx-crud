import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState } from './article.reducer';

export const articleFeatureSelector = createFeatureSelector<ArticleState>('articles');

export const ArticleList = createSelector(
  articleFeatureSelector,
  state => state.articleList
)

export const selectedArticle = createSelector(
  articleFeatureSelector,
  state => state.selectedArticle
)