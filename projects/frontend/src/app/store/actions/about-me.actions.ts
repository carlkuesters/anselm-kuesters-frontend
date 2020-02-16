import {createAction, props} from '@ngrx/store';

import {AboutMeEvent} from '../../model/aboutMeEvent';
import {Achievements} from '../../model/achievements';

export const loadEvents = createAction('[AboutMe] Load events');
export const eventsLoaded = createAction('[AboutMe] Events loaded', props<{ events: AboutMeEvent[] }>());
export const loadAchievements = createAction('[AboutMe] Load achievements');
export const achievementsLoaded = createAction('[AboutMe] Achievements loaded', props<{ achievements: Achievements }>());
