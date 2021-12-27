import {createFeatureSelector, createSelector} from '@ngrx/store';

import {PageState} from './page-state.model';

const getPageState = createFeatureSelector<PageState>('page');

const getResponseHomePage = createSelector(
  getPageState, state => state.responseHomePage,
);

export const getHomePage = createSelector(
  getResponseHomePage, response => response ? response.data : null,
);

const getResponseContentPage = createSelector(
  getPageState, state => state.responseContentPage,
);

export const getContentPage = createSelector(
  getResponseContentPage, response => response ? response.data : null,
);

const getResponseAboutMePage = createSelector(
  getPageState, state => state.responseAboutMePage,
);

export const getAboutMePage = createSelector(
  getResponseAboutMePage, response => response ? response.data : null,
);

const getResponseContactPage = createSelector(
  getPageState, state => state.responseContactPage,
);

export const getContactPage = createSelector(
  getResponseContactPage, response => response ? response.data : null,
);

const getResponseInfoPage = createSelector(
  getPageState, state => state.responseInfoPage,
);

export const getInfoPage = createSelector(
  getResponseInfoPage, response => response ? response.data : null,
);
