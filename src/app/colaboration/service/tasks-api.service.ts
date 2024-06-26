import { Injectable } from '@angular/core';

import {Task} from "../model/task.entity";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private basePath = 'http://localhost:8080';

  private getTask = 'http://localhost:8080/api/v1/projects/{{projectId}}/tasks';

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
    return this.http.get<Task[]>(`http://localhost:8080/api/v1/projects/${projectId}/tasks`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createTask(projectId: number, task: Task): Observable<Task> {

    task.projectId = projectId;
    return this.http.post<Task>(`http://localhost:8080/api/v1/tasks`, task)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTaskById(taskId: number): Observable<Task> {
    return this.http.get<Task>(`http://localhost:8080/api/v1/tasks/${taskId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateTask(taskId: number, task: Task): Observable<Task> {

    task.projectId = Number(task.projectId);
    return this.http.put<Task>(`http://localhost:8080/api/v1/tasks/${taskId}`, task)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/v1/tasks/${taskId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTaskByIdTeam(teamId: number): Observable<Task[]>{
    return this.http.get<Task[]>(`http://localhost:8080/api/v1/teams/${teamId}/tasks`)
        .pipe(
            catchError(this.handleError)
        );
  }

}
