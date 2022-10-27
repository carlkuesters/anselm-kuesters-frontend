import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as TextScrapingActions from './text-scraping.actions';
import {TextScrapingState} from './text-scraping-state.model';

const initialState: TextScrapingState = {
  googleChartsAllowed: false,
  textSources: null,
  enabledTextSourceIds: null,
  trendlineEnabled: false,
  word: '',
  textWordAnalyses: null,
};

const reducer = createReducer(
  initialState,
  on(TextScrapingActions.allowGoogleCharts, (state) => ({ ...state, googleChartsAllowed: true })),
  on(TextScrapingActions.textSourcesLoaded, (state, { textSources }) => ({ ...state,
    textSources,
    enabledTextSourceIds: textSources.map(textSource => textSource.id)
  })),
  on(TextScrapingActions.configureTextSource, (state, { textSourceId, enabled }) => ({ ...state,
    enabledTextSourceIds: configureTextSource(state.enabledTextSourceIds, textSourceId, enabled)
  })),
  on(TextScrapingActions.configureTrendline, (state, { enabled }) => ({ ...state, trendlineEnabled: enabled })),
  on(TextScrapingActions.setWord, (state, { word }) => ({ ...state, word })),
  on(TextScrapingActions.textWordAnalysesLoaded, (state, { textWordAnalyses }) => ({ ...state, textWordAnalyses })),
);

function configureTextSource(enabledTextSourceIds: number[], textSourceId: number, enabled: boolean): number[] {
  if (enabled) {
    return [...enabledTextSourceIds, textSourceId];
  } else {
    return enabledTextSourceIds.filter(id => id !== textSourceId);
  }
}

// @ts-ignore
export function textScrapingReducer(state: TextScrapingState | undefined, action: Action) {
  return reducer(state, action);
}
