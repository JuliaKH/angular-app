import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IImagesState } from '../state/images.state';

const selectImages = (state: IAppState) => state.images;

export const selectImagesLst = createSelector(
  selectImages,
  (state: IImagesState) => state.images
);

export const selectAddedImagesLst = createSelector(
  selectImages,
  (state: IImagesState) => state.addedImages
);
