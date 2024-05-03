import { Injectable } from '@angular/core';

import {Document} from "../model/document.entity";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

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

  getDocumentsByProject(projectId: number): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.basePath}/projects/${projectId}/documents`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createDocument(projectId: number, document: Document): Observable<Document> {

    document.projectId = Number(document.projectId);

    return this.http.post<Document>(`${this.basePath}/projects/${projectId}/documents`, document)
      .pipe(
        catchError(this.handleError)
      );
  }

  getDocumentById(documentId: number): Observable<Document> {
    return this.http.get<Document>(`${this.basePath}/documents/${documentId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateDocument(documentId: number, document: Document): Observable<Document> {

    document.projectId = Number(document.projectId);
    return this.http.put<Document>(`${this.basePath}/documents/${documentId}`, document)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteDocument(documentId: number): Observable<any> {
    return this.http.delete<any>(`${this.basePath}/documents/${documentId}`)
      .pipe(
        catchError(this.handleError)
      );
  }
}
