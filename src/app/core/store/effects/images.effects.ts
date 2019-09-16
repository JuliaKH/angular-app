import { Injectable } from '@angular/core';

import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map, mergeMap, catchError, withLatestFrom, switchMap, mapTo} from 'rxjs/operators';
import { SearchService } from '../../search/search.service';
import {EImagesActions, GetImagesSuccess, GetImages } from '../actions/images.actions';
import {IAppState} from '../state/app.state';
import {Store, select} from '@ngrx/store';
import {IImages} from '../../search/images';

@Injectable()
export class ImagesEffects {
  // @Effect()
  // getImages$ = this.actions$.pipe(
  //   // ofType<GetImages>(EImagesActions.GetImages),
  //   // map(action => action.payload),
  //   // withLatestFrom(this.store.pipe(select(selectImagesList))),
  //   // switchMap(([id, images]) => {
  //   //   const selectedImages = images.filter(image => image.id === +id)[0];
  //   //   return of(new GetImagesSuccess(selectedImages));
  //   // })
  //   ofType<GetImages>(EImagesActions.GetImages),
  //   switchMap(() => this.searchService.getImages('popular')),
  //   switchMap((images: Idata) => of(new GetImagesSuccess(images)))
  // );

  @Effect()
  loadImages$ = this.actions$.pipe(
    ofType(EImagesActions.GetImages),
      switchMap(() => {
        return this.searchService
          .getUnsplashImages('popular')
          .pipe(
            map(images => new GetImagesSuccess(images))
            // catchError(error => of(new movieActions.LoadMoviesFail(error)))
          );
      })
  );
  constructor(
    private searchService: SearchService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}
}
