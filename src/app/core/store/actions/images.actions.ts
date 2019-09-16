import { Action } from '@ngrx/store';

import { IImages } from '../../search/images';

export enum EImagesActions {
  GetImages = '[Images] Get Images',
  GetImagesSuccess = '[Images] Get Images Success'
}

export class GetImages implements Action {
  public readonly type = EImagesActions.GetImages;
}

export class GetImagesSuccess implements Action {
  public readonly type = EImagesActions.GetImagesSuccess;
  constructor(public payload: IImages[]) {}
}

export type ImagesActions = GetImages | GetImagesSuccess;
