import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {QuoteHttpService} from '../../core/services/quote-http/quote-http.service';
import * as QuoteActions from '../actions/quote.actions';
import {getQuotes} from '../selectors/quote.selectors';
import {QuoteState} from '../state/quote-state.model';

@Injectable()
export class QuoteEffects {

  constructor(
    private actions: Actions,
    private quoteStore: Store<QuoteState>,
    private quoteHttpService: QuoteHttpService,
  ) {}

  loadQuotes = createEffect(() => this.actions.pipe(
    ofType(QuoteActions.loadQuotes),
    withLatestFrom(this.quoteStore.select(getQuotes)),
    filter(([_, quotes]) => !quotes),
    switchMap(() => this.quoteHttpService.getQuotes().pipe(
      map(responseQuotes => QuoteActions.quotesLoaded({ responseQuotes })),
      catchError(() => EMPTY)
    ))
  ));
}
