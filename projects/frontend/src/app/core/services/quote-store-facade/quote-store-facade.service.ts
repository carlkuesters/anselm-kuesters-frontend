import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Quote} from '../../../model/quote';
import * as QuoteActions from '../../../store/actions/quote.actions';
import {QuoteState} from '../../../store/state/quote-state.model';
import {getRandomQuote} from '../../../store/selectors/quote.selectors';

@Injectable()
export class QuoteStoreFacadeService {

  constructor(private store: Store<QuoteState>) {
  }

  getRandomQuote(): Observable<Quote> {
    return this.store.select(getRandomQuote);
  }

  loadQuotes(): void {
    return this.store.dispatch(QuoteActions.loadQuotes());
  }
}
