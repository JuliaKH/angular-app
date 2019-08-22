import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getUnsplashImages(title: string) {
    console.log('hello');
    const headers = new HttpHeaders().set('Authorization', 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b');

    const options = {
      params: {'query': title, 'per_page': '30'},
      headers: {'Authorization': 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'}
    };


    return this.http.get ('https://api.unsplash.com/search/photos', options)
      .pipe(
        tap( // Log the result or error
          data => console.log(data),
          error => console.log(error)
        )
      );
  }
}
