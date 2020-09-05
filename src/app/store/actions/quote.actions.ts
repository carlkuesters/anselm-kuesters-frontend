import {createAction, props} from '@ngrx/store';

import {Quote} from '../../model/quote';

export const loadQuotes = createAction('[Quote] Load quotes');
export const quotesLoaded = createAction('[Quote] Quotes loaded', props<{ quotes: Quote[] }>());
