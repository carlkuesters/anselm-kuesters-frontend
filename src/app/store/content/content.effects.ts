import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';

import {LinkHttpService} from '../../core/services/link-http/link-http.service';
import {TextHttpService} from '../../core/services/text-http/text-http.service';
import * as ContentActions from './content.actions';
import {ContentState} from './content-state.model';

@Injectable()
export class ContentEffects {

  constructor(
    private actions: Actions,
    private contentStore: Store<ContentState>,
    private textHttpService: TextHttpService,
    private linkHttpService: LinkHttpService,
  ) {}

  loadTextEntries = createEffect(() => this.actions.pipe(
    ofType(ContentActions.loadContent),
    switchMap(() => this.textHttpService.getTextEntries().pipe(
      map(responseTextEntries => ContentActions.textEntriesLoaded({ responseTextEntries })),
      catchError(() => EMPTY)
    ))
  ));

  loadLinks = createEffect(() => this.actions.pipe(
    ofType(ContentActions.loadContent),
    switchMap(() => this.linkHttpService.getLinks().pipe(
      map(responseLinks => ContentActions.linksLoaded({ responseLinks })),
      catchError(() => EMPTY)
    ))
  ));
}
