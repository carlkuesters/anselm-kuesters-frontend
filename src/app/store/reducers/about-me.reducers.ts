import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as AboutMeActions from '../actions/about-me.actions';
import {AboutMeState} from '../state/about-me-state.model';

const initialState: AboutMeState = {
  events: null,
  achievements: null,
};

const reducer = createReducer(
  initialState,
  on(AboutMeActions.eventsLoaded, (state, { events }) => ({ ...state, events })),
  on(AboutMeActions.achievementsLoaded, (state, { achievements }) => ({ ...state, achievements })),
);

// @ts-ignore
export function aboutMeReducer(state: AboutMeState | undefined, action: Action) {
  return reducer(state, action);
}
