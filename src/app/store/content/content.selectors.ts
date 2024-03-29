import {createFeatureSelector, createSelector} from '@ngrx/store';

import {parseDate} from '../../core/util/date/date.util';
import {mapLinksViews, mapTextEntriesViews} from '../../core/util/view/view.util';
import {ContentState} from './content-state.model';

const getContentState = createFeatureSelector<ContentState>('content');

const getResponseTextEntries = createSelector(
  getContentState, state => state.responseTextEntries,
);

export const getTextEntries = createSelector(
  getResponseTextEntries, response => response ? response.data : null,
);

const getTextEntriesViews = createSelector(
  getTextEntries, textEntries => textEntries ? mapTextEntriesViews(textEntries) : [],
);

export const getNewestTextEntryViews = createSelector(
  getTextEntriesViews, displayedTextEntries => {
    return displayedTextEntries
        .sort((displayedTextEntry1, displayedTextEntry2) => parseDate(displayedTextEntry2.date) - parseDate(displayedTextEntry1.date))
        .slice(0, 5);
  },
);

const getResponseLinks = createSelector(
  getContentState, state => state.responseLinks,
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
