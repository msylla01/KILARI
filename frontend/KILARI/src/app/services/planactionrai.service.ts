import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Tocprobleme, Rai, Incident, Planaction } from '../model/rai';
import { Toc } from '../model/toc';

@Injectable({
  providedIn: 'root'
})
export class PlanactionraiService {
  private  baseURL = "http://127.0.0.1:8000/api"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Tocprobleme> {
    return this.httpClient.get<Tocprobleme>(this.baseURL + '/tocprobleme/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getAllIncident(): Observable<Incident> {
    return this.httpClient.get<Incident>(this.baseURL + '/incident/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createIncident(rai: any): Observable<Incident> {
    return this.httpClient.post<Incident>(this.baseURL + '/incident/', JSON.stringify(rai), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createPlanaction(rai: any): Observable<Planaction> {
    return this.httpClient.post<Planaction>(this.baseURL + '/planaction/', JSON.stringify(rai), this.httpOptions)
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


  update(id: number, post: any): Observable<Toc> {
    return this.httpClient.put<Toc>(this.baseURL + '/ /' + id+'/', JSON.stringify(post), this.httpOptions)
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
