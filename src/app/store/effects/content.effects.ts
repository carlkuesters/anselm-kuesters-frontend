import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {LinkHttpService} from '../../core/services/link-http/link-http.service';
import {TextHttpService} from '../../core/services/text-http/text-http.service';
import * as ContentActions from '../actions/content.actions';
import {getLinks, getTextEntries} from '../selectors/content.selectors';
import {ContentState} from '../state/content-state.model';

@Injectable()
export class ContentEffects {

  constructor(
    private actions: Actions,
    private contentStore: Store<ContentState>,
    private textHttpService: TextHttpService,
    private linkHttpService: LinkHttpService,
  ) {}

  loadContent = createEffect(() => this.actions.pipe(
    ofType(ContentActions.loadContent),
    switchMap(() => [
      ContentActions.loadTextEntries(),
      ContentActions.loadLinks(),
    ]),
  ));

  loadTextEntries = createEffect(() => this.actions.pipe(
    ofType(ContentActions.loadTextEntries),
    withLatestFrom(this.contentStore.select(getTextEntries)),
    filter(([_, textEntries]) => !textEntries),
    switchMap(() => this.textHttpService.getTextEntries().pipe(
      map(responseTextEntries => ContentActions.textEntriesLoaded({ responseTextEntries })),
      catchError(() => EMPTY)
    ))
  ));

  loadLinks = createEffect(() => this.actions.pipe(
    ofType(ContentActions.loadLinks),
    withLatestFrom(this.contentStore.select(getLinks)),
    filter(([_, links]) => !links),
    switchMap(() => this.linkHttpService.getLinks().pipe(
      map(responseLinks => ContentActions.linksLoaded({ responseLinks })),
      catchError(() => EMPTY)
    ))
  ));
}
