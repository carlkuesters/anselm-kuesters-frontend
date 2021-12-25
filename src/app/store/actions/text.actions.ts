import {createAction, props} from '@ngrx/store';

import {ApiResponse} from '../../model/api-response';
import {Text} from '../../model/text';

export const loadText = createAction('[Text] Load text', props<{ seoId: string }>());
export const textLoaded = createAction('[Text] Text loaded', props<{ responseText: ApiResponse<Text> }>());
