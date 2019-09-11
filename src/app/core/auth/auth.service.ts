import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  unsplashUrl = 'https://unsplash.com/oauth/authorize';
  addUser(): Observable<IUserData> {
    let params = new HttpParams();
    params = params.append('client_id', '5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b');
    params = params.append('redirect_uri', 'urn:ietf:wg:oauth:2.0:oob');
    params = params.append('response_type', 'post');
    params = params.append('scope', 'public+read_user+write_likes');

    return this.http.post<any>(this.unsplashUrl, {params})
      .pipe(
        map((data: any) => {
          console.log(data);
          return data;
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}
// const unsplash = new Unsplash({
//   applicationId: "{APP_ACCESS_KEY}",
//   secret: "{APP_SECRET}"
// });
interface IUserData {
  access_token: string;
  token_type: string;
  scope: string;
  created_at: number;
}
