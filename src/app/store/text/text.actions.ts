import {createAction, props} from '@ngrx/store';

import {ApiResponse} from '../../model/api-response.interface';
import {Text} from '../../model/text.interface';

export const loadText = createAction('[Text] Load text', props<{ seoId: string }>());
export const textLoaded = createAction('[Text] Text loaded', props<{ responseText: ApiResponse<Text> }>());
