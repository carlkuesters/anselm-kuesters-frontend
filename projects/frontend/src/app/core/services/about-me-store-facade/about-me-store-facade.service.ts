import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AboutMeEvent} from '../../../model/aboutMeEvent';
import {Achievement} from '../../../model/achievement';
import * as AboutMeActions from '../../../store/actions/about-me.actions';
import {
  getAchievements_Awards,
  getAchievements_FurtherDevelopments,
  getAchievements_InTheMedia,
  getEvents
} from '../../../store/selectors/about-me.selectors';
import {AboutMeState} from '../../../store/state/about-me-state.model';

@Injectable()
export class AboutMeStoreFacadeService {

  constructor(private store: Store<AboutMeState>) {
  }

  getEvents(): Observable<AboutMeEvent[]> {
    return this.store.select(getEvents);
  }

  getAchievements_FurtherDevelopments(): Observable<Achievement[]> {
    return this.store.select(getAchievements_FurtherDevelopments);
  }

  getAchievements_Awards(): Observable<Achievement[]> {
    return this.store.select(getAchievements_Awards);
  }

  getAchievements_InTheMedia(): Observable<Achievement[]> {
    return this.store.select(getAchievements_InTheMedia);
  }

  loadEvents(): void {
    return this.store.dispatch(AboutMeActions.loadEvents());
  }

  loadAchievements(): void {
    return this.store.dispatch(AboutMeActions.loadAchievements());
  }
}
