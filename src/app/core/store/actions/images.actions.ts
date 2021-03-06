import { Action } from '@ngrx/store';

import { IImages } from '../../services/search/images';

export enum EImagesActions {
  GetImages = '[Images] Get Images',
  GetImagesSuccess = '[Images] Get Images Success',
  AddImages = '[Images] Add Images',
  AddImagesSuccess = '[Images] Add Images Success',
  GetImagesFailure = '[Images] Get Images Failure'
}

export class GetImages implements Action {
  public readonly type = EImagesActions.GetImages;
}

export class GetImagesSuccess implements Action {
  public readonly type = EImagesActions.GetImagesSuccess;
  constructor(public payload: IImages[]) {}
}
export class AddImages implements Action {
  public readonly type = EImagesActions.AddImages;
}

export class AddImagesSuccess implements Action {
  public readonly type = EImagesActions.AddImagesSuccess;
  constructor(public payload: IImages[]) {}
}

export class GetImagesFailure implements Action {
  public readonly type = EImagesActions.GetImagesFailure;
  constructor(public payload: any) {}
}
export type ImagesActions = GetImages | GetImagesSuccess | GetImagesFailure | AddImages | AddImagesSuccess;
