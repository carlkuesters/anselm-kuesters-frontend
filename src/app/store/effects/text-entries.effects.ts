import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {TextHttpService} from '../../core/services/text-http/text-http.service';
import * as TextEntriesActions from '../actions/text-entries.actions';
import {getTextEntries} from '../selectors/text-entries.selectors';
import {TextEntriesState} from '../state/text-entries-state.model';

@Injectable()
export class TextEntriesEffects {

  constructor(
    private actions: Actions,
    private textEntriesStore: Store<TextEntriesState>,
    private textHttpService: TextHttpService,
  ) {}

  loadTextEntries = createEffect(() => this.actions.pipe(
    ofType(TextEntriesActions.loadTextEntries),
    withLatestFrom(this.textEntriesStore.select(getTextEntries)),
    filter(([_, textEntries]) => !textEntries),
    switchMap(() => this.textHttpService.getTextEntries().pipe(
      map(textEntries => TextEntriesActions.textEntriesLoaded({ textEntries })),
      catchError(() => EMPTY)
    ))
  ));
}
