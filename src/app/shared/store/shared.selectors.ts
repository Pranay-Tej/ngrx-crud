import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.reducer';
const sharedFeatureSelector = createFeatureSelector<SharedState>('shared');

export const selectedNavItem = createSelector(
  sharedFeatureSelector,
  state => state.selectedNavItem
)