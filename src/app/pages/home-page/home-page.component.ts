import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {QuoteStoreFacadeService} from '../../core/services/quote-store-facade/quote-store-facade.service';
import {ContentStoreFacadeService} from '../../core/services/content-store-facade/content-store-facade.service';
import {ContentView} from '../../model/content-view';
import {Quote} from '../../model/quote';

@Component({
  selector: 'anselm-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  newestTextEntries: Observable<ContentView[]>;
  quote: Observable<Quote>;

  constructor(private contentStoreFacadeService: ContentStoreFacadeService,
              private quoteStoreFacadeService: QuoteStoreFacadeService) {
  }

  ngOnInit(): void {
    this.newestTextEntries = this.contentStoreFacadeService.getNewestTextEntryView();
    this.quote = this.quoteStoreFacadeService.getRandomQuote();

    this.contentStoreFacadeService.loadContent();
    this.quoteStoreFacadeService.loadQuotes();
  }
}
