import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {ContentView} from '../../../model/content-view';
import * as ContentActions from '../../../store/actions/content.actions';
import {getContentViews, getNewestTextEntryView} from '../../../store/selectors/content.selectors';
import {ContentState} from '../../../store/state/content-state.model';

@Injectable()
export class ContentStoreFacadeService {

  constructor(private store: Store<ContentState>) {
  }

  getContentViews(): Observable<ContentView[]> {
    return this.store.select(getContentViews);
  }

  getNewestTextEntryView(): Observable<ContentView[]> {
    return this.store.select(getNewestTextEntryView);
  }

  loadContent(): void {
    return this.store.dispatch(ContentActions.loadContent());
  }
}
