import {createFeatureSelector, createSelector} from '@ngrx/store';

import {QuoteState} from '../state/quote-state.model';

const getQuoteState = createFeatureSelector<QuoteState>('quote');

const getResponseQuotes = createSelector(
  getQuoteState, state => state.responseQuotes,
);

export const getQuotes = createSelector(
  getResponseQuotes, response => response ? response.data : null,
);

export const getRandomQuote = createSelector(
  getQuotes, quotes => quotes ? quotes[Math.floor(Math.random() * quotes.length)] : null,
);
