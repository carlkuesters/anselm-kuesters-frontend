import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as TextScrapingActions from '../../../store/actions/text-scraping.actions';
import {TextScrapingState} from '../../../store/state/text-scraping-state.model';
import {TextSource} from '../../../model/text-scraping/text-source';
import {TextWordAnalysis} from '../../../model/text-scraping/text-word-analysis';
import {getTextSources, getTextWordAnalyses, isTrendlineEnabled} from '../../../store/selectors/text-scraping.selectors';

@Injectable()
export class TextScrapingStoreFacadeService {

  constructor(private store: Store<TextScrapingState>) {
  }

  getTextSources(): Observable<TextSource[]> {
    return this.store.select(getTextSources);
  }

  isTrendlineEnabled(): Observable<boolean> {
    return this.store.select(isTrendlineEnabled);
  }

  getTextWordAnalyses(): Observable<TextWordAnalysis[]> {
    return this.store.select(getTextWordAnalyses);
  }

  loadTextSources(): void {
    return this.store.dispatch(TextScrapingActions.loadTextSources());
  }

  configureTextSource(textSourceId: number, enabled: boolean): void {
    return this.store.dispatch(TextScrapingActions.configureTextSource({ textSourceId, enabled }));
  }

  configureTrendline(enabled: boolean): void {
    return this.store.dispatch(TextScrapingActions.configureTrendline({ enabled }));
  }

  setWord(word: string): void {
    return this.store.dispatch(TextScrapingActions.setWord({ word }));
  }

  loadTextWordAnalysis(): void {
    return this.store.dispatch(TextScrapingActions.loadTextWordAnalysis());
  }
}
