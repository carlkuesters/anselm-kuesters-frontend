import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {ContentView} from '../../model/content-view.interface';
import {ContentPage} from '../../model/pages/content-page.interface';
import {getContentViews} from '../../store/content/content.selectors';
import {getContentPage} from '../../store/page/page.selectors';

@Component({
  selector: 'anselm-content-page',
  templateUrl: './content-page.component.html'
})
export class ContentPageComponent implements OnInit {

  contentPage: Observable<ContentPage>;
  contentViews: Observable<ContentView[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.contentPage = this.store.select(getContentPage);
    this.contentViews = this.store.select(getContentViews);
  }
}
