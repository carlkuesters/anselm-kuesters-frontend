import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';

import {QuoteHttpService} from '../../core/services/quote-http/quote-http.service';
import * as QuoteActions from './quote.actions';
import {QuoteState} from './quote-state.model';

@Injectable()
export class QuoteEffects {

  constructor(
    private actions: Actions,
    private quoteStore: Store<QuoteState>,
    private quoteHttpService: QuoteHttpService,
  ) {}

  loadQuotes = createEffect(() => this.actions.pipe(
    ofType(QuoteActions.loadQuotes),
    switchMap(() => this.quoteHttpService.getQuotes().pipe(
      map(responseQuotes => QuoteActions.quotesLoaded({ responseQuotes })),
      catchError(() => EMPTY)
    ))
  ));
}
