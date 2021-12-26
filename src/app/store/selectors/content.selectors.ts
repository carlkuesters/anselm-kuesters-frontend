import {createFeatureSelector, createSelector} from '@ngrx/store';

import {parseDate} from '../../core/util/date/date.util';
import {mapLinksViews, mapTextEntriesViews} from '../../core/util/view/view.util';
import {ContentState} from '../state/content-state.model';

const getTextState = createFeatureSelector<ContentState>('content');

const getResponseTextEntries = createSelector(
  getTextState, state => state.responseTextEntries,
);

export const getTextEntries = createSelector(
  getResponseTextEntries, response => response ? response.data : null,
);

const getTextEntriesViews = createSelector(
  getTextEntries, textEntries => textEntries ? mapTextEntriesViews(textEntries) : [],
);

export const getNewestTextEntryView = createSelector(
  getTextEntriesViews, displayedTextEntries => {
    return displayedTextEntries
        .sort((displayedTextEntry1, displayedTextEntry2) => parseDate(displayedTextEntry2.date) - parseDate(displayedTextEntry1.date))
        .slice(0, 5);
  },
);

const getResponseLinks = createSelector(
  getTextState, state => state.responseLinks,
);

export const getLinks = createSelector(
  getResponseLinks, response => response ? response.data : null,
);

const getLinksViews = createSelector(
  getLinks, links => links ? mapLinksViews(links) : [],
);

export const getContentViews = createSelector(
  getTextEntriesViews, getLinksViews, (textEntriesViews, linksViews) => [...textEntriesViews, ...linksViews],
);
