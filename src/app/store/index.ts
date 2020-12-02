import { sharedReducer } from './../shared/store/shared.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store'

export interface AppState{

}

export const reducers: ActionReducerMap<AppState> = {
  shared: sharedReducer
}

export const metaReducers:MetaReducer<AppState>[] = [];