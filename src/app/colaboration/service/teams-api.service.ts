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
    return this.http.get<Team[]>(`http://localhost:8080/api/v1/projects/${projectId}/teams`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createTeam(projectId: number, team: Team): Observable<Team> {

    team.projectId = projectId;

    return this.http.post<Team>(`http://localhost:8080/api/v1/teams`, team)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTeamById(teamId: number): Observable<Team> {
    return this.http.get<Team>(`http://localhost:8080/api/v1/teams/${teamId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateTeam(teamId: number, team: Team): Observable<Team> {

    team.projectId = Number(team.projectId);

    return this.http.put<Team>(`http://localhost:8080/api/v1/teams/${teamId}`, team)
      .pipe(
        catchError(this.handleError)
      );

  }

  //Elimina el equipo pero sale un codigo de error 200
  deleteTeam(teamId: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/v1/teams/${teamId}`)
      .pipe(
        catchError(this.handleError)
      );

  }

}
