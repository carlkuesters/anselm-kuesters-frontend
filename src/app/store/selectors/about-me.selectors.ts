import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AboutMeState} from '../state/about-me-state.model';

const getAboutMeState = createFeatureSelector<AboutMeState>('aboutMe');

export const getEvents = createSelector(
  getAboutMeState, state => state.events,
);

export const getAchievements = createSelector(
  getAboutMeState, state => state.achievements,
);

export const getAchievements_FurtherDevelopments = createSelector(
  getAchievements, achievements => achievements ? achievements.furtherDevelopments : null,
);

export const getAchievements_Awards = createSelector(
  getAchievements, achievements => achievements ? achievements.awards : null,
);

export const getAchievements_InTheMedia = createSelector(
  getAchievements, achievements => achievements ? achievements.inTheMedia : null,
);
