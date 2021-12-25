import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as TextActions from '../actions/text-entries.actions';
import {TextEntriesState} from '../state/text-entries-state.model';

const initialState: TextEntriesState = {
  responseTextEntries: null,
};

const reducer = createReducer(
  initialState,
  on(TextActions.textEntriesLoaded, (state, { responseTextEntries }) => ({ ...state, responseTextEntries })),
);

// @ts-ignore
export function textEntriesReducer(state: TextEntriesState | undefined, action: Action) {
  return reducer(state, action);
}
