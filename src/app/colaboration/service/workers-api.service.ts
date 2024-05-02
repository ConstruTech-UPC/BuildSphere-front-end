import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Worker} from "../model/worker.entity";

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  private basePath = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getWorkerByProject(projectId: number): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${this.basePath}/projects/${projectId}/workers`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createWorker(projectId: number, worker: Worker): Observable<Worker> {

    worker.projectId = Number(worker.projectId);

    return this.http.post<Worker>(`${this.basePath}/projects/${projectId}/workers`, worker)
      .pipe(
        catchError(this.handleError)
      );
  }

  getWorkerById(workerId: number): Observable<Worker> {
    return this.http.get<Worker>(`${this.basePath}/workers/${workerId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateWorker(workerId: number, worker: Worker): Observable<Worker> {
    worker.projectId = Number(worker.projectId);

    return this.http.put<Worker>(`${this.basePath}/workers/${workerId}`, worker)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteWorker(workerId: number): Observable<any> {
    return this.http.delete<any>(`${this.basePath}/workers/${workerId}`)
      .pipe(
        catchError(this.handleError)
      );
  }



}
