import { sharedActions } from './shared.actions';
import { createReducer, on } from '@ngrx/store';

export interface SharedState {
  selectedNavItem: string;
}

export const initialState: SharedState = {
  selectedNavItem: '',
};

export const sharedReducer = createReducer(
  initialState,
  on(sharedActions.setSelectedNavItem, (state, { selectedNavItem }) => ({
    ...state,
    selectedNavItem,
  }))
);
