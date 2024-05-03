import { Injectable } from '@angular/core';
import {Material} from "../model/material.entity";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Machine} from "../model/machine.entity";
import {throwError, Observable, catchError, retry} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class MachineryService {
  private basePath = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message); //message for error
    } else {
      console.log(`Backend returned code ${error.status},body was: ${error.error}`); //message for error
    }
    return throwError(() => new Error('Something happened with the request. Please try again later.'));
  }

  getMachinesByProject(projectId: number): Observable<Machine> {
    return this.http.get<Machine>(`${this.basePath}/projects/${projectId}/machines`)
      .pipe(retry(2), catchError(this.handleError));
  }

  createMachine(projectId: number, machine: Machine): Observable<Machine> {
    machine.projectId = Number(machine.projectId);
    return this.http.post<Machine>(`${this.basePath}/projects/${projectId}/machines`, machine)
      .pipe(retry(2), catchError(this.handleError));
  }

  getMachineById(machineId: number): Observable<Machine> {
    return this.http.get<Machine>(`${this.basePath}/machines/${machineId}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateMachine(machineId: number, machine: Machine): Observable<Machine> {
    return this.http.put<Machine>(`${this.basePath}/machines/${machineId}`, machine)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteMachine(machineId: number): Observable<any> {
    return this.http.delete<Machine>(`${this.basePath}/machines/${machineId}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
