import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DisplayedTextEntry} from '../../../model/displayed-text-entry';
import * as TextEntriesActions from '../../../store/actions/text-entries.actions';
import {TextEntriesState} from '../../../store/state/text-entries-state.model';
import {getDisplayedTextEntries, getNewestDisplayedTextEntries} from '../../../store/selectors/text-entries.selectors';

@Injectable()
export class TextEntriesStoreFacadeService {

  constructor(private store: Store<TextEntriesState>) {
  }

  getDisplayedTextEntries(): Observable<DisplayedTextEntry[]> {
    return this.store.select(getDisplayedTextEntries);
  }

  getNewestDisplayedTextEntries(): Observable<DisplayedTextEntry[]> {
    return this.store.select(getNewestDisplayedTextEntries);
  }

  loadTextEntries(): void {
    return this.store.dispatch(TextEntriesActions.loadTextEntries());
  }
}
