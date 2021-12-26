import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as AboutMeActions from './about-me.actions';
import {AboutMeState} from './about-me-state.model';

const initialState: AboutMeState = {
  responseEvents: null,
  responseAchievements: null,
};

const reducer = createReducer(
  initialState,
  on(AboutMeActions.eventsLoaded, (state, { responseEvents }) => ({ ...state, responseEvents })),
  on(AboutMeActions.achievementsLoaded, (state, { responseAchievements }) => ({ ...state, responseAchievements })),
);

// @ts-ignore
export function aboutMeReducer(state: AboutMeState | undefined, action: Action) {
  return reducer(state, action);
}
