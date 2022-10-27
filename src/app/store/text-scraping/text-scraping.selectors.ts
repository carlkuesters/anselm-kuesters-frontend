import {createFeatureSelector, createSelector} from '@ngrx/store';

import {TextScrapingState} from './text-scraping-state.model';

const getTextScrapingState = createFeatureSelector<TextScrapingState>('textScraping');

export const isGoogleChartsAllowed = createSelector(
  getTextScrapingState, state => state.googleChartsAllowed
);

export const getTextSources = createSelector(
  getTextScrapingState, state => state.textSources
);

export const getEnabledTextSourceIds = createSelector(
  getTextScrapingState, state => state.enabledTextSourceIds
);

export const isTrendlineEnabled = createSelector(
  getTextScrapingState, state => state.trendlineEnabled
);

export const getWord = createSelector(
  getTextScrapingState, state => state.word
);

export const getTextWordAnalyses = createSelector(
  getTextScrapingState, state => state.textWordAnalyses
);
