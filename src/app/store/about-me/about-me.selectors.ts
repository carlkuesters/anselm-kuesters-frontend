import {createFeatureSelector, createSelector} from '@ngrx/store';

import {Achievement} from '../../model/achievement.interface';
import {AboutMeState} from './about-me-state.model';

const getAboutMeState = createFeatureSelector<AboutMeState>('aboutMe');

const getResponseEvents = createSelector(
  getAboutMeState, state => state.responseEvents,
);

export const getEvents = createSelector(
  getResponseEvents, response => response ? response.data : null,
);

const getResponseAchievements = createSelector(
  getAboutMeState, state => state.responseAchievements,
);

export const getAchievements = createSelector(
  getResponseAchievements, response => response ? response.data : null,
);

export const getAchievements_FurtherDevelopments = createSelector(
  getAchievements, achievements => filterAchievements(achievements, 'furtherDevelopments'),
);

export const getAchievements_Awards = createSelector(
  getAchievements, achievements => filterAchievements(achievements, 'awards'),
);

export const getAchievements_InTheMedia = createSelector(
  getAchievements, achievements => filterAchievements(achievements, 'inTheMedia'),
);

function filterAchievements(achievements: Achievement[] | null, name: string): Achievement[] {
  return (achievements ? achievements.filter(achievement => achievement.attributes.type.data.attributes.name === name) : []);
}
