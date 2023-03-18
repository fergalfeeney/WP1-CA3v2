import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import{Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs';
import {IOMDBResponse} from '../ombdresponse';
import { IOMDBResponse2 } from '../omdmresponse2';

@Injectable({
  providedIn: 'root'
})
export class OmbdApiService {

  private _siteURL="https://www.omdbapi.com/"
  private _key="?apikey=eb04e1b1&t="
  private _key2="?apikey=fa53e047&s="
  constructor(private _http:HttpClient) { }

  getMovieData(movieName:string):Observable<IOMDBResponse> {
    return this._http.get<IOMDBResponse>(this._siteURL+ this._key + movieName)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
}

getMoviesData(movieName:string, page:number):Observable<IOMDBResponse2> {
  return this._http.get<IOMDBResponse2>(this._siteURL+ this._key2 + movieName + "&page=" + page)
  .pipe(
    tap(data => console.log('Moviedata/error' + JSON.stringify(data))
  ),
  catchError(this.handleError)
  );
}

private handleError(err:HttpErrorResponse) {
  console.log('OmdbApiService:' + err.message);

  return throwError(() => new Error("OmdbApiService:" + err.message))
}
}
