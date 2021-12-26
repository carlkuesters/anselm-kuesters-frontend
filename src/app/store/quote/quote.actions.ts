import {createAction, props} from '@ngrx/store';

import {ApiResponse} from '../../model/api-response.interface';
import {Quote} from '../../model/quote.interface';

export const loadQuotes = createAction('[Quote] Load quotes');
export const quotesLoaded = createAction('[Quote] Quotes loaded', props<{ responseQuotes: ApiResponse<Quote[]> }>());
