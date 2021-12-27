import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {ContentView} from '../../model/content-view.interface';
import {Quote} from '../../model/quote.interface';
import {getNewestTextEntryViews} from '../../store/content/content.selectors';
import {getRandomQuote} from '../../store/quote/quote.selectors';

@Component({
  selector: 'anselm-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  newestTextEntries: Observable<ContentView[]>;
  quote: Observable<Quote>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.newestTextEntries = this.store.select(getNewestTextEntryViews);
    this.quote = this.store.select(getRandomQuote);
  }
}
