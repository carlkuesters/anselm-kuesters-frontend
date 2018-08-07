import {Injectable} from '@angular/core';

import {Quote} from '../components/pages/homePage/components/quote/classes/quote';
import {BackendInformationService} from './backendInformation.service';

@Injectable()
export class QuotesService {

  constructor(private backendInformationService: BackendInformationService) {
  }

  getRandomQuote(): Promise<Quote> {
    return this.getQuotes().then(quotes => {
      return quotes[Math.floor(Math.random() * quotes.length)];
    })
  }

  getQuotes(): Promise<Quote[]> {
    return this.backendInformationService.getQuotes();
  }
}
