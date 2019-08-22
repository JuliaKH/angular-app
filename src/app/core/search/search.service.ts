import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Images } from '../../shared/images';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) { }


  getUnsplashImages(title: string): Observable<Images[]> {
    console.log('hello');

    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
      })
    };

    return this.http.get (`https://api.unsplash.com/search/photos?page=1&query=${title}`, options)
      .pipe(
        map((data: Idata) => {
          const images = data.results;
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
