import {createAction, props} from '@ngrx/store';

import {ApiResponse} from '../../model/api-response';
import {Quote} from '../../model/quote';

export const loadQuotes = createAction('[Quote] Load quotes');
export const quotesLoaded = createAction('[Quote] Quotes loaded', props<{ responseQuotes: ApiResponse<Quote[]> }>());
