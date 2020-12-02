import { createAction, props } from '@ngrx/store';

export const setSelectedNavItem = createAction(
  '[Shared] Set Selected nav item',
  props<{ selectedNavItem: string }>()
);

export const sharedActions = {
  setSelectedNavItem
}
