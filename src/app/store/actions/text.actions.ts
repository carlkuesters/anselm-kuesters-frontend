import {createAction, props} from '@ngrx/store';

import {Text} from '../../model/text';

export const loadText = createAction('[Text] Load text', props<{ seoId: string }>());
export const textLoaded = createAction('[Text] Texts loaded', props<{ text: Text }>());
