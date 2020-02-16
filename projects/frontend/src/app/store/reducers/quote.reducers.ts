import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as QuoteActions from '../actions/quote.actions';
import {QuoteState} from '../state/quote-state.model';

const initialState: QuoteState = {
  quotes: null,
};

const reducer = createReducer(
  initialState,
  on(QuoteActions.quotesLoaded, (state, { quotes }) => ({ ...state, quotes })),
);

// @ts-ignore
export function quoteReducer(state: QuoteState | undefined, action: Action) {
  return reducer(state, action);
}
