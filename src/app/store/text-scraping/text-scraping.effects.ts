import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY, of} from 'rxjs';
import {map, catchError, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {TextScrapingHttpService} from '../../core/services/text-scraping-http/text-scraping-http.service';
import * as TextScrapingActions from './text-scraping.actions';
import {
  getEnabledTextSourceIds,
  getTextSources,
  getWord
} from './text-scraping.selectors';
import {TextScrapingState} from './text-scraping-state.model';

@Injectable()
export class TextScrapingEffects {

  constructor(
    private actions: Actions,
    private textScrapingStore: Store<TextScrapingState>,
    private textScrapingHttpService: TextScrapingHttpService,
  ) {}

  loadTextSources = createEffect(() => this.actions.pipe(
    ofType(TextScrapingActions.loadTextSources),
    withLatestFrom(this.textScrapingStore.select(getTextSources)),
    filter(([_, textSources]) => !textSources),
    switchMap(() => this.textScrapingHttpService.getTextSources().pipe(
      map(textSources => TextScrapingActions.textSourcesLoaded({ textSources })),
      catchError(() => EMPTY)
    ))
  ));

  loadTextWordAnalysis = createEffect(() => this.actions.pipe(
    ofType(TextScrapingActions.loadTextWordAnalysis),
    withLatestFrom(
      this.textScrapingStore.select(getWord),
      this.textScrapingStore.select(getEnabledTextSourceIds),
    ),
    switchMap(([_, word, enabledTextSourceIds]) => {
      if (enabledTextSourceIds.length > 0) {
        return this.textScrapingHttpService.getWordAnalyses(word, enabledTextSourceIds).pipe(
          map(textWordAnalyses => TextScrapingActions.textWordAnalysesLoaded({ textWordAnalyses })),
          catchError(() => EMPTY)
        );
      } else {
        return of(TextScrapingActions.textWordAnalysesLoaded({ textWordAnalyses: [] }));
      }
    })
  ));

  loadTextWordAnalysisOnTextSourceConfiguration = createEffect(() => this.actions.pipe(
    ofType(TextScrapingActions.configureTextSource),
    map(() => TextScrapingActions.loadTextWordAnalysis()),
  ));
}
