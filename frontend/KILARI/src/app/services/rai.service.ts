import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Toc } from '../model/toc';
import { Impact, Rai, Tocprobleme } from '../model/rai';

@Injectable({
  providedIn: 'root'
})
export class RaiService {
  private  baseURL = "http://127.0.0.1:8000/api"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Toc> {
    return this.httpClient.get<Toc>(this.baseURL + '/toc/')
    .pipe(
      catchError(this.errorHandler)
    )
  }


getAllTocpro(): Observable<Tocprobleme> {
    return this.httpClient.get<Tocprobleme>(this.baseURL + '/tocprobleme/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  create(rai: any): Observable<Rai> {
    return this.httpClient.post<Rai>(this.baseURL + '/rai/', JSON.stringify(rai), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createImpact(impact: any): Observable<Impact> {
    return this.httpClient.post<Impact>(this.baseURL + '/impact/', JSON.stringify(impact), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createtocpro(tocpro: any): Observable<Tocprobleme> {
    return this.httpClient.post<Tocprobleme>(this.baseURL + '/tocprobleme/', JSON.stringify(tocpro), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + '/toc/' + id + '/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  findrai(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + '/rai/' + id + '/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findtocpro(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + '/tocprobleme/' + id + '/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: number, post: any): Observable<Toc> {
    return this.httpClient.put<Toc>(this.baseURL + '/toc/' + id+'/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  updatetocpro(id: number, post: any): Observable<Tocprobleme> {
    return this.httpClient.put<Tocprobleme>(this.baseURL + '/tocprobleme/' + id +'/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  updaterai(id: number, post: any): Observable<Rai> {
    return this.httpClient.put<Rai>(this.baseURL + '/rai/' + id +'/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number){
    return this.httpClient.delete<Toc>(this.baseURL + '/toc/' + id, this.httpOptions)
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
