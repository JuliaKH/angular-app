import { Action } from '@ngrx/store';

import { ICollections } from '../../services/collections/collections';

export enum ECollectionsActions {
  GetCollections = '[Collections] Get Collections',
  GetCollectionsSuccess = '[Collections] Get Collections Success',
  GetCollectionsFailure = '[Collections] Get Collections Failure'
}

export class GetCollections implements Action {
  public readonly type = ECollectionsActions.GetCollections;
}

export class GetCollectionsSuccess implements Action {
  public readonly type = ECollectionsActions.GetCollectionsSuccess;
  constructor(public payload: ICollections) {}
}

export class GetCollectionsFailure implements Action {
  public readonly type = ECollectionsActions.GetCollectionsFailure;
  constructor(public payload: any) {}
}
export type CollectionsActions = GetCollections | GetCollectionsSuccess | GetCollectionsFailure;
