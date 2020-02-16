import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {QuoteStoreFacadeService} from '../../core/services/quote-store-facade/quote-store-facade.service';
import {TextEntriesStoreFacadeService} from '../../core/services/text-entries-store-facade/text-entries-store-facade.service';
import {DisplayedTextEntry} from '../../model/displayed-text-entry';
import {Quote} from '../../model/quote';

@Component({
  selector: 'anselm-home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent implements OnInit {
  newestTextEntries: Observable<DisplayedTextEntry[]>;
  quote: Observable<Quote>;

  constructor(private textEntriesStoreFacadeService: TextEntriesStoreFacadeService,
              private quoteStoreFacadeService: QuoteStoreFacadeService) {
  }

  ngOnInit(): void {
    this.newestTextEntries = this.textEntriesStoreFacadeService.getNewestDisplayedTextEntries();
    this.quote = this.quoteStoreFacadeService.getRandomQuote();

    this.textEntriesStoreFacadeService.loadTextEntries();
    this.quoteStoreFacadeService.loadQuotes();
  }
}
