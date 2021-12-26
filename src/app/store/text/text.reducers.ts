import {createEntityAdapter} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';

import {ApiResponse} from '../../model/api-response.interface';
import {Text} from '../../model/text.interface';
import * as TextActions from './text.actions';
import {TextState} from './text-state.model';

export const textAdapter = createEntityAdapter<ApiResponse<Text>>({
  selectId: (response) => response.data.id,
});

const initialState = textAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(TextActions.textLoaded, (state, { responseText }) => textAdapter.addOne(responseText, state)),
);

// @ts-ignore
export function textReducer(state: TextState | undefined, action: Action) {
  return reducer(state, action);
}
