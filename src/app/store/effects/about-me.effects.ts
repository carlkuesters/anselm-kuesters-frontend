import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {AboutMeHttpService} from '../../core/services/about-me-http/about-me-http.service';
import * as AboutMeActions from '../actions/about-me.actions';
import {getAchievements, getEvents} from '../selectors/about-me.selectors';
import {AboutMeState} from '../state/about-me-state.model';

@Injectable()
export class AboutMeEffects {

  constructor(
    private actions: Actions,
    private aboutMeStore: Store<AboutMeState>,
    private aboutMeHttpService: AboutMeHttpService,
  ) {}

  loadEvents = createEffect(() => this.actions.pipe(
    ofType(AboutMeActions.loadEvents),
    withLatestFrom(this.aboutMeStore.select(getEvents)),
    filter(([_, events]) => !events),
    switchMap(() => this.aboutMeHttpService.getEvents().pipe(
      map(responseEvents => AboutMeActions.eventsLoaded({ responseEvents })),
      catchError(() => EMPTY)
    ))
  ));

  loadAchievements = createEffect(() => this.actions.pipe(
    ofType(AboutMeActions.loadAchievements),
    withLatestFrom(this.aboutMeStore.select(getAchievements)),
    filter(([_, achievements]) => !achievements),
    switchMap(() => this.aboutMeHttpService.getAchievements().pipe(
      map(responseAchievements => AboutMeActions.achievementsLoaded({ responseAchievements })),
      catchError(() => EMPTY)
    ))
  ));
}
