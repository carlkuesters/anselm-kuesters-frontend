import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Text} from '../../../model/text';
import * as TextActions from '../../../store/actions/text.actions';
import {getText} from '../../../store/selectors/text.selectors';
import {TextState} from '../../../store/state/text-state.model';

@Injectable()
export class TextStoreFacadeService {

  constructor(private store: Store<TextState>) {
  }

  getText(seoId: string): Observable<Text> {
    return this.store.select(getText, { seoId });
  }

  loadText(seoId: string): void {
    return this.store.dispatch(TextActions.loadText({ seoId }));
  }
}
