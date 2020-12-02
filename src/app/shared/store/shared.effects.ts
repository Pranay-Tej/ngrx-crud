import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class SharedEffects {
  constructor(private actions$: Actions, private router: Router) {}

  setSelectedNavItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Shared] Set Selected nav item'),
        tap({
          next: (action: any) => {
            let selectedNavItem: string = action.selectedNavItem;
            this.router.navigate(['/', selectedNavItem]);
          }
        })
      ),
    { dispatch: false }
  );
}
