import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { Images } from '../../shared/images';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) { }

  public currentImages = new Subject<any>();
  public queryTitle;
  getUnsplashImages(title: string, page): Observable<Images[]> {
    let headers = new HttpHeaders();
    headers  = headers.append('Authorization', 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b');

    let params = new HttpParams();
    params = params.append('query', title);
    params = params.append('per_page', '30');

    return this.http.get(`https://api.unsplash.com/search/photos?page=${page}`, {headers, params})
      .pipe(
        map((data: Idata) => {
          const images = data.results;
          this.currentImages.next(images);
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
  getImages(title, page) {
    this.getUnsplashImages(title, page).subscribe((data) => {
      // this.images = data;
    });
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
