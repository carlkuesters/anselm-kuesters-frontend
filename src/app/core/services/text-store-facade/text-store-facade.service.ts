import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {TextView} from '../../../model/text-view';
import * as TextActions from '../../../store/actions/text.actions';
import {getTextView} from '../../../store/selectors/text.selectors';
import {TextState} from '../../../store/state/text-state.model';

@Injectable()
export class TextStoreFacadeService {

  constructor(private store: Store<TextState>) {
  }

  getTextView(seoId: string): Observable<TextView> {
    return this.store.select(getTextView, { seoId });
  }

  loadText(seoId: string): void {
    return this.store.dispatch(TextActions.loadText({ seoId }));
  }
}
