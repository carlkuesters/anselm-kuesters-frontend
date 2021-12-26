import {createFeatureSelector, createSelector} from '@ngrx/store';

import {parseSeoId} from '../../core/util/seo/seo.util';
import {mapTextView} from '../../core/util/view/view.util';
import {textAdapter} from './text.reducers';
import {TextState} from './text-state.model';

const getTextState = createFeatureSelector<TextState>('text');

const entitySelectors = textAdapter.getSelectors();

const getEntities = createSelector(
  getTextState,
  entitySelectors.selectEntities
);

const getResponseText = createSelector(
  getEntities, (entities, props) => entities[parseSeoId(props.seoId)],
);

export const getText = createSelector(
  getResponseText, response => response ? response.data : null,
);

export const getTextView = createSelector(
  getText, text => text ? mapTextView(text) : null,
);
