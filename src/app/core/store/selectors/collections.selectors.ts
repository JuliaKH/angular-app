import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICollectionsState } from '../state/collections.state';

const selectCollections = (state: IAppState) => state.collections;

export const selectCollectionsLst = createSelector(
  selectCollections,
  (state: ICollectionsState) => state.collections
);

