import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ECollectionsActions, GetCollectionsSuccess, GetCollectionsFailure } from '../actions/collections.actions';
import { CollectionsService } from '../../services/collections/collections.service';

@Injectable()
export class CollectionsEffects {

  @Effect()
  loadCollections$ = this.actions$.pipe(
    ofType(ECollectionsActions.GetCollections),
    switchMap(() => {
      return this.collectService
        .getUnsplashCollections()
        .pipe(
          map(collections => new GetCollectionsSuccess(collections)),
          catchError(error => of(new GetCollectionsFailure(error)))
        );
    })
  );

  constructor(
    private collectService: CollectionsService,
    private actions$: Actions,
  ) {}
}
