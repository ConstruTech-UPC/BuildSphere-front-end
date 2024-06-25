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
    return this.http.get<Worker[]>(`http://localhost:8080/api/v1/projects/${projectId}/workers`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createWorker(projectId: number, worker: Worker): Observable<Worker> {

    worker.projectId = projectId;

    return this.http.post<Worker>(`http://localhost:8080/api/v1/workers`, worker)
      .pipe(
        catchError(this.handleError)
      );
  }

  getWorkerById(workerId: number): Observable<Worker> {
    return this.http.get<Worker>(`http://localhost:8080/api/v1/workers/${workerId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateWorker(workerId: number, worker: Worker): Observable<Worker> {
    worker.projectId = Number(worker.projectId);
    worker.hoursWorked = Number(worker.hoursWorked);

    return this.http.put<Worker>(`http://localhost:8080/api/v1/workers/${workerId}`, worker)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Elimina el trabajador pero sale un codigo de error 200
  deleteWorker(workerId: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/v1/workers/${workerId}`)
      .pipe(
        catchError(this.handleError)
      );
  }



}
