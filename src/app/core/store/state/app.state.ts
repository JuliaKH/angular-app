import { RouterReducerState } from '@ngrx/router-store';

import { IImagesState, initialImagesState } from './images.state';

export interface IAppState {
  router?: RouterReducerState;
  images: IImagesState;
}
export const initialAppState: IAppState = {
  images: initialImagesState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
