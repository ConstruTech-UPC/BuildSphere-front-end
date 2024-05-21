import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../model/project.entity";
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = 'http://localhost:3000/api/v1/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }


  // Crear un nuevo proyecto
  createProject(project: Project): Observable<Project> {
    const projectToSend = {
      name: project.name,
      description: project.description,
      location: project.location,
      startDate: project.startDate,
      expectedEndDate: project.expectedEndDate,
      budget: project.budget,
      urlImage: project.urlImage
    };
    return this.http.post<Project>(this.apiUrl, projectToSend);
  }

  // Actualizar un proyecto existente
  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${project.id}`, project);
  }

  // Eliminar un proyecto
  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
