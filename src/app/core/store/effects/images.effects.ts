import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { SearchService } from '../../services/search/search.service';
import { EImagesActions, GetImagesSuccess, GetImagesFailure, AddImagesSuccess } from '../actions/images.actions';

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

  @Effect()
  addedImages$ = this.actions$.pipe(
    ofType(EImagesActions.AddImages),
    switchMap(() => {
      return this.searchService
        .addScrollingImages(this.searchService.queryTitle, this.searchService.page)
        .pipe(
          map(images => new AddImagesSuccess(images)),
          catchError(error => of(new GetImagesFailure(error)))
        );
    }),
  );
  constructor(
    private searchService: SearchService,
    private actions$: Actions
  ) {}
}
