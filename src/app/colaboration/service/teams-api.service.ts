import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Team} from "../model/team.entity";


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

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

  getTeamsByProject(projectId: number): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.basePath}/projects/${projectId}/teams`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createTeam(projectId: number, team: Team): Observable<Team> {
    return this.http.post<Team>(`${this.basePath}/projects/${projectId}/tasks`, team)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTeamById(teamId: number): Observable<Team> {
    return this.http.get<Team>(`${this.basePath}/teams/${teamId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateTeam(teamId: number, team: Team): Observable<Team> {
    return this.http.put<Team>(`${this.basePath}/teams/${teamId}`, team)
      .pipe(
        catchError(this.handleError)
      );

  }

  deleteTeam(teamId: number): Observable<any> {
    return this.http.delete<any>(`${this.basePath}/tasks/${teamId}`)
      .pipe(
        catchError(this.handleError)
      );

  }

}
