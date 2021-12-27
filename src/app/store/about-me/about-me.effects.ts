import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';

import {AboutMeHttpService} from '../../core/services/about-me-http/about-me-http.service';
import * as AboutMeActions from './about-me.actions';
import {AboutMeState} from './about-me-state.model';

@Injectable()
export class AboutMeEffects {

  constructor(
    private actions: Actions,
    private aboutMeStore: Store<AboutMeState>,
    private aboutMeHttpService: AboutMeHttpService,
  ) {}

  loadEvents = createEffect(() => this.actions.pipe(
    ofType(AboutMeActions.loadEvents),
    switchMap(() => this.aboutMeHttpService.getEvents().pipe(
      map(responseEvents => AboutMeActions.eventsLoaded({ responseEvents })),
      catchError(() => EMPTY)
    ))
  ));

  loadAchievements = createEffect(() => this.actions.pipe(
    ofType(AboutMeActions.loadAchievements),
    switchMap(() => this.aboutMeHttpService.getAchievements().pipe(
      map(responseAchievements => AboutMeActions.achievementsLoaded({ responseAchievements })),
      catchError(() => EMPTY)
    ))
  ));
}
