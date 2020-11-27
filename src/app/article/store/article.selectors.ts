import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState } from './article.reducer';

export const articleFeatureSelector = createFeatureSelector<ArticleState>('articles');

export const getAllArticles = createSelector(
  articleFeatureSelector,
  state => state.articleList
)

export const getSelectedArticle = createSelector(
  articleFeatureSelector,
  state => state.selectedArticle
)