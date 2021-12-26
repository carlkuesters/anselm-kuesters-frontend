import {createAction, props} from '@ngrx/store';

import {AboutMeEvent} from '../../model/about-me-event.interface';
import {Achievement} from '../../model/achievement.interface';
import {ApiResponse} from '../../model/api-response.interface';

export const loadEvents = createAction('[AboutMe] Load events');
export const eventsLoaded = createAction('[AboutMe] Events loaded', props<{ responseEvents: ApiResponse<AboutMeEvent[]> }>());
export const loadAchievements = createAction('[AboutMe] Load achievements');
export const achievementsLoaded = createAction(
  '[AboutMe] Achievements loaded',
  props<{ responseAchievements: ApiResponse<Achievement[]> }>(),
);
