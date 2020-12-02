import { sharedActions } from './../../shared/store/shared.actions';
import { select, Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { selectedNavItem } from 'src/app/shared/store/shared.selectors';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy {
  selectedNavItem$: string;
  subscriptions: Subscription[] = [];

  constructor(private store: Store<AppState>, private router:Router) {}

  ngOnInit() {
    this.subscriptions.push(
      this.store.pipe(select(selectedNavItem)).subscribe((selectedNavItem) => {
        if (selectedNavItem) {
          this.selectedNavItem$ = selectedNavItem;
        }
      })
    );
  }

  navigate(selectedNavItem: string) {
    // this.router.navigate(['/', selectedNavItem])
    this.store.dispatch(sharedActions.setSelectedNavItem({selectedNavItem}))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }
}
