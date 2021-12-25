import {createAction, props} from '@ngrx/store';

import {ApiResponse} from '../../model/api-response';
import {TextEntry} from '../../model/text-entry';

export const loadTextEntries = createAction('[TextEntries] Load text entries');
export const textEntriesLoaded = createAction(
  '[TextEntries] Texts entries loaded',
  props<{ responseTextEntries: ApiResponse<TextEntry[]> }>(),
);
