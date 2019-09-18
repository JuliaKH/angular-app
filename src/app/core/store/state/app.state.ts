import { RouterReducerState } from '@ngrx/router-store';

import { IImagesState, initialImagesState } from './images.state';
import { ICollectionsState, initialCollectionsState } from './collections.state';

export interface IAppState {
  router?: RouterReducerState;
  images: IImagesState;
  collections: ICollectionsState;
}
export const initialAppState: IAppState = {
  images: initialImagesState,
  collections: initialCollectionsState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
