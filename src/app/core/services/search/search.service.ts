import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { IImages } from './images';
import {AddImages, GetImages} from '../../store/actions/images.actions';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient, private store: Store<IAppState>) { }

  // public newImages = new Subject<any>();
  // public currentImages = new Subject<any>();
  public queryTitle;
  public page;

  getUnsplashImages(title: string): Observable<IImages[]> {
    let headers = new HttpHeaders();
    headers  = headers.append('Authorization', 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b');

    let params = new HttpParams();
    params = params.append('query', title);
    params = params.append('per_page', '10');

    return this.http.get(`https://api.unsplash.com/search/photos?page=1`, {headers, params})
      .pipe(
        map((data: Idata) => {
          const images = data.results;
          // this.newImages.next(images);
          return images.map((image) => {
            return {id: image.id, description: image.description, url: image.urls.regular};
          });
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  addScrollingImages(title: string, page): Observable<IImages[]> {
    let headers = new HttpHeaders();
    headers  = headers.append('Authorization', 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b');
    let params = new HttpParams();
    params = params.append('query', title);
    params = params.append('per_page', '10');

    return this.http.get(`https://api.unsplash.com/search/photos?page=${page}`, {headers, params})
      .pipe(
        map((data: Idata) => {
          const images = data.results;
          // this.currentImages.next(images);
          return images.map((image) => {
            return {id: image.id, description: image.description, url: image.urls.regular};
          });
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}

interface Idata {
  results: [{
    id: string,
    description: string,
    urls: {
      regular: string
    }
  }] ;
}
