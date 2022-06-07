import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Toc, Toctik } from '../model/toc';

@Injectable({
  providedIn: 'root'
})
export class TocService {
  private  baseURL = "http://127.0.0.1:8000/api"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(toc: any): Observable<Toc> {
    return this.httpClient.post<Toc>(this.baseURL + '/toc/', JSON.stringify(toc), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 

  createTocN(toc: any): Observable<Toctik> {
    return this.httpClient.post<Toctik>(this.baseURL + '/tocticket/', JSON.stringify(toc), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 


  getAllTick(): Observable<Toctik> {
    return this.httpClient.get<Toctik>(this.baseURL + '/tocticket/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

   getAll(): Observable<Toctik> {
    return this.httpClient.get<Toctik>(this.baseURL + '/tocticket/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
