import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as ContentActions from '../actions/content.actions';
import {ContentState} from '../state/content-state.model';

const initialState: ContentState = {
  responseTextEntries: null,
  responseLinks: null,
};

const reducer = createReducer(
  initialState,
  on(ContentActions.textEntriesLoaded, (state, { responseTextEntries }) => ({ ...state, responseTextEntries })),
  on(ContentActions.linksLoaded, (state, { responseLinks }) => ({ ...state, responseLinks })),
);

// @ts-ignore
export function contentReducer(state: ContentState | undefined, action: Action) {
  return reducer(state, action);
}
