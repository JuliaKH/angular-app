import { Injectable } from '@angular/core';

import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map, mergeMap, catchError, withLatestFrom, switchMap, mapTo} from 'rxjs/operators';
import { SearchService } from '../../services/search/search.service';
import { EImagesActions, GetImagesSuccess, GetImages, GetImagesFailure} from '../actions/images.actions';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class ImagesEffects {

  @Effect()
  loadImages$ = this.actions$.pipe(
    ofType(EImagesActions.GetImages),
      switchMap(() => {
        return this.searchService
          .getUnsplashImages(this.searchService.queryTitle)
          .pipe(
            map(images => new GetImagesSuccess(images)),
            catchError(error => of(new GetImagesFailure(error)))
          );
      })
  );
  constructor(
    private searchService: SearchService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}
}
