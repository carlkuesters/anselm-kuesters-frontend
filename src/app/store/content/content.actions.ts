import {createAction, props} from '@ngrx/store';

import {ApiResponse} from '../../model/api-response.interface';
import {Link} from '../../model/link.interface';
import {TextEntry} from '../../model/text-entry.interface';

export const loadContent = createAction('[Content] Load content');
export const loadTextEntries = createAction('[Content] Load text entries');
export const textEntriesLoaded = createAction(
  '[Content] Texts entries loaded',
  props<{ responseTextEntries: ApiResponse<TextEntry[]> }>(),
);
export const loadLinks = createAction('[Content] Load links');
export const linksLoaded = createAction(
  '[Content] Links loaded',
  props<{ responseLinks: ApiResponse<Link[]> }>(),
);
