import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private http: HttpClient) { }

  getUnsplashCollections(): Observable<ICollections[]> {
    let headers = new HttpHeaders();
    headers  = headers.append('Authorization', 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b');

    let params = new HttpParams();
    params = params.append('per_page', '30');

    return this.http.get(`https://api.unsplash.com/collections`, {headers, params})
      .pipe(
        map((data: any) => {
          const collections = data;
          console.log(collections);
          return collections.map((collection) => {
            return {id: collection.id, title: collection.title, description: collection.description };
          });
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}

