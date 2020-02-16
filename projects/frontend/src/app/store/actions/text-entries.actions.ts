import {createAction, props} from '@ngrx/store';

import {TextEntry} from '../../model/textEntry';

export const loadTextEntries = createAction('[TextEntries] Load text entries');
export const textEntriesLoaded = createAction('[TextEntries] Texts entries loaded', props<{ textEntries: TextEntry[] }>());
