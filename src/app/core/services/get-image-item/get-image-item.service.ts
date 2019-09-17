import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Image} from '../../../pages/image-item/image';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetImageItemService {

  constructor(private http: HttpClient) { }
  getImageItem(id: string): Observable<Image> {
    let headers = new HttpHeaders();
    headers  = headers.append('Authorization', 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b');

    return this.http.get(`https://api.unsplash.com/photos/${id}`, {headers})
      .pipe(
        map((data: IdataImage) => {
          console.log(data);
          return{id: data.id, alt_description: data.alt_description, url: data.urls.regular };
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

}

interface IdataImage {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
}
