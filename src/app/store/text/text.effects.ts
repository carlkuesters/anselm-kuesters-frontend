import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, filter} from 'rxjs/operators';

import {parseSeoId} from '../../core/util/seo/seo.util';
import {TextHttpService} from '../../core/services/text-http/text-http.service';
import * as TextActions from './text.actions';
import {getText} from './text.selectors';
import {TextState} from './text-state.model';

@Injectable()
export class TextEffects {

  constructor(
    private actions: Actions,
    private textStore: Store<TextState>,
    private textHttpService: TextHttpService,
  ) {}

  loadText = createEffect(() => this.actions.pipe(
    ofType(TextActions.loadText),
    switchMap(({ seoId }) => this.textStore.select(getText, { seoId }).pipe(
        filter(text => !text),
        switchMap(() => this.textHttpService.getText(parseSeoId(seoId)).pipe(
          map(responseText => TextActions.textLoaded({ responseText })),
          catchError(() => EMPTY)
        ))
    )),
  ));
}
