import {createFeatureSelector, createSelector} from '@ngrx/store';

import {parseSeoId} from '../../core/util/seo/seo.util';
import {textAdapter} from '../reducers/text.reducers';
import {TextState} from '../state/text-state.model';

const getTextState = createFeatureSelector<TextState>('text');

const entitySelectors = textAdapter.getSelectors();

const getEntities = createSelector(
  getTextState,
  entitySelectors.selectEntities
);

export const getText = createSelector(
  getEntities, (entities, props) => entities[parseSeoId(props.seoId)],
);
