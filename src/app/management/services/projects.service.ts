import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "../model/project.entity";
import { BaseService } from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseService {
  private projectsUrl = `${this.baseUrl}/projects`;

  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(http: HttpClient) {
    super(http);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl, { headers: this.headers });
  }

  getProjectById(projectId: number): Observable<Project> {
    return this.http.get<Project>(`${this.projectsUrl}/${projectId}`, { headers: this.headers });
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project, { headers: this.headers });
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.projectsUrl}/${project.id}`, project, { headers: this.headers });
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.projectsUrl}/${id}`, { headers: this.headers });
  }
}