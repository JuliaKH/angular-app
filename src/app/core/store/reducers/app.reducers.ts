import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { imagesReducers } from './images.reducers';
import { collectionsReducers } from './collections.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  images: imagesReducers,
  collections: collectionsReducers
};
