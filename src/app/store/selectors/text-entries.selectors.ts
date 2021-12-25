import {createFeatureSelector, createSelector} from '@ngrx/store';

import {parseDate} from '../../core/util/date/date.util';
import {mapTextEntriesViews} from '../../core/util/view/view.util';
import {TextEntriesState} from '../state/text-entries-state.model';

const getTextState = createFeatureSelector<TextEntriesState>('textEntries');

const getResponseTextEntries = createSelector(
  getTextState, state => state.responseTextEntries,
);

export const getTextEntries = createSelector(
  getResponseTextEntries, response => response ? response.data : null,
);

export const getTextEntriesViews = createSelector(
  getTextEntries, textEntries => textEntries ? mapTextEntriesViews(textEntries) : null,
);

export const getNewestTextEntryView = createSelector(
  getTextEntriesViews, displayedTextEntries => {
    return displayedTextEntries
      ? displayedTextEntries
        .sort((displayedTextEntry1, displayedTextEntry2) => parseDate(displayedTextEntry2.date) - parseDate(displayedTextEntry1.date))
        .slice(0, 5)
      : null;
  },
);
