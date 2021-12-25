import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {TextEntryView} from '../../../model/text-entry-view';
import * as TextEntriesActions from '../../../store/actions/text-entries.actions';
import {getTextEntriesViews, getNewestTextEntryView} from '../../../store/selectors/text-entries.selectors';
import {TextEntriesState} from '../../../store/state/text-entries-state.model';

@Injectable()
export class TextEntriesStoreFacadeService {

  constructor(private store: Store<TextEntriesState>) {
  }

  getTextEntriesViews(): Observable<TextEntryView[]> {
    return this.store.select(getTextEntriesViews);
  }

  getNewestTextEntryView(): Observable<TextEntryView[]> {
    return this.store.select(getNewestTextEntryView);
  }

  loadTextEntries(): void {
    return this.store.dispatch(TextEntriesActions.loadTextEntries());
  }
}
