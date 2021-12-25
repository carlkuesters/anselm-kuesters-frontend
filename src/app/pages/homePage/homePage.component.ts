import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {QuoteStoreFacadeService} from '../../core/services/quote-store-facade/quote-store-facade.service';
import {TextEntriesStoreFacadeService} from '../../core/services/text-entries-store-facade/text-entries-store-facade.service';
import {TextEntryView} from '../../model/text-entry-view';
import {Quote} from '../../model/quote';

@Component({
  selector: 'anselm-home-page',
  templateUrl: './homePage.component.html'
})
export class HomePageComponent implements OnInit {
  newestTextEntries: Observable<TextEntryView[]>;
  quote: Observable<Quote>;

  constructor(private textEntriesStoreFacadeService: TextEntriesStoreFacadeService,
              private quoteStoreFacadeService: QuoteStoreFacadeService) {
  }

  ngOnInit(): void {
    this.newestTextEntries = this.textEntriesStoreFacadeService.getNewestTextEntryView();
    this.quote = this.quoteStoreFacadeService.getRandomQuote();

    this.textEntriesStoreFacadeService.loadTextEntries();
    this.quoteStoreFacadeService.loadQuotes();
  }
}
