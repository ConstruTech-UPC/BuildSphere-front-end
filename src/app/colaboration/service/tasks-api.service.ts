import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Task} from "../model/task.entity";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

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

  getTasksByProject(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.basePath}/projects/${projectId}/tasks`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createTask(projectId: number, task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.basePath}/projects/${projectId}/tasks`, task)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateTask(projectId: number, taskId: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.basePath}/projects/${projectId}/tasks/${taskId}`, task)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTask(projectId: number, taskId: number): Observable<any> {
    return this.http.delete<any>(`${this.basePath}/projects/${projectId}/tasks/${taskId}`)
      .pipe(
        catchError(this.handleError)
      );
  }



}
