import {createFeatureSelector, createSelector} from '@ngrx/store';

import {toDisplayedTextEntries} from '../../core/util/text/text.util';
import {TextEntriesState} from '../state/text-entries-state.model';

const getTextState = createFeatureSelector<TextEntriesState>('textEntries');

export const getTextEntries = createSelector(
  getTextState, state => state.textEntries
);

export const getDisplayedTextEntries = createSelector(
  getTextEntries, textEntries => textEntries ? toDisplayedTextEntries(textEntries) : null,
);

export const getNewestDisplayedTextEntries = createSelector(
  getDisplayedTextEntries, displayedTextEntries => {
    return displayedTextEntries
      ? displayedTextEntries
        .sort((displayedTextEntry1, displayedTextEntry2) => displayedTextEntry2.date - displayedTextEntry1.date)
        .slice(0, 5)
      : null;
  },
);
