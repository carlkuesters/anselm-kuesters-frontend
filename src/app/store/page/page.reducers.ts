import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as PageActions from './page.actions';
import {PageState} from './page-state.model';

const initialState: PageState = {
  responseHomePage: null,
  responseContentPage: null,
  responseAboutMePage: null,
  responseContactPage: null,
  responseInfoPage: null,
};

const reducer = createReducer(
  initialState,
  on(PageActions.homePageLoaded, (state, { responseHomePage }) => ({ ...state, responseHomePage })),
  on(PageActions.contentPageLoaded, (state, { responseContentPage }) => ({ ...state, responseContentPage })),
  on(PageActions.aboutMePageLoaded, (state, { responseAboutMePage }) => ({ ...state, responseAboutMePage })),
  on(PageActions.contactPageLoaded, (state, { responseContactPage }) => ({ ...state, responseContactPage })),
  on(PageActions.infoPageLoaded, (state, { responseInfoPage }) => ({ ...state, responseInfoPage })),
);

// @ts-ignore
export function pageReducer(state: PageState | undefined, action: Action) {
  return reducer(state, action);
}
