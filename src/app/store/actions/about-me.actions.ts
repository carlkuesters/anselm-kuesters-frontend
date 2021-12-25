import {createAction, props} from '@ngrx/store';

import {AboutMeEvent} from '../../model/about-me-event';
import {Achievement} from '../../model/achievement';
import {ApiResponse} from '../../model/api-response';

export const loadEvents = createAction('[AboutMe] Load events');
export const eventsLoaded = createAction('[AboutMe] Events loaded', props<{ responseEvents: ApiResponse<AboutMeEvent[]> }>());
export const loadAchievements = createAction('[AboutMe] Load achievements');
export const achievementsLoaded = createAction(
  '[AboutMe] Achievements loaded',
  props<{ responseAchievements: ApiResponse<Achievement[]> }>(),
);
