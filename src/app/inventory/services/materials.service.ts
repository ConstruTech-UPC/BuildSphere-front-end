import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Material} from "../model/material.entity";

@Injectable({
  providedIn: 'root'
})

export class MaterialsService {
  private basePath = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message); //message for error
    } else {
      console.log(`Backend returned code ${error.status},body was: ${error.error}`); //message for error
    }
    return throwError(() => new Error('Something happened with the request. Please try again later.'));
  }

  getMaterialsByProject(projectId: number) {
    return this.http.get<Material[]> (`${this.basePath}/projects/${projectId}/materials`)
        .pipe(retry(2), catchError(this.handleError));
  }

  createMaterial(projectId: number, material: Material) {
    material.projectId = Number(material.projectId);
    return this.http.post<Material>(`${this.basePath}/projects/${projectId}/materials`, material)
      .pipe(retry(2), catchError(this.handleError));
  }

  getMaterialById(materialId: number) {
    return this.http.get<Material>(`${this.basePath}/materials/${materialId}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateMaterial(materialId: number, material: Material) {
    return this.http.put<Material>(`${this.basePath}/materials/${materialId}`, material)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteMaterial(materialId: number): Observable<any> {
    return this.http.delete<Material>(`${this.basePath}/materials/${materialId}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
