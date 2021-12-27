import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {ContentView} from '../../model/content-view.interface';
import {getContentViews} from '../../store/content/content.selectors';

@Component({
  selector: 'anselm-content-page',
  templateUrl: './content-page.component.html'
})
export class ContentPageComponent implements OnInit {
  contentViews: Observable<ContentView[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.contentViews = this.store.select(getContentViews);
  }
}
