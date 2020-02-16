import {createFeatureSelector, createSelector} from '@ngrx/store';

import {QuoteState} from '../state/quote-state.model';

const getQuoteState = createFeatureSelector<QuoteState>('quote');

export const getQuotes = createSelector(
  getQuoteState, state => state.quotes,
);

export const getRandomQuote = createSelector(
  getQuotes, quotes => quotes ? quotes[Math.floor(Math.random() * quotes.length)] : null,
);
