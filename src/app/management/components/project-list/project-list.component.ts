import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { Project } from '../../model/project.entity';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.updateProjectList(); // Actualiza la lista al cargar para garantizar la UI está sincronizada
      },
      error: (error) => console.error('There was an error!', error)
    });
  }
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(ProjectFormComponent, {
      width: '500px',
      data: { project: null } // Inicia el diálogo sin un proyecto existente
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projectService.createProject(result).subscribe({
          next: (newProject) => {
            this.projects.push(newProject); // Añade el proyecto nuevo a la lista
            this.updateProjectList(); // Actualiza la lista para reflejar el cambio en la UI
          },
          error: (error) => console.error('Failed to create project', error)
        });
      }
    });
  }

  handleEdit(project: Project): void {
    const dialogRef = this.dialog.open(ProjectFormComponent, {
      width: '500px',
      data: { project }
    });

    dialogRef.afterClosed().subscribe(updatedProject => {
      if (updatedProject) {
        const index = this.projects.findIndex(p => p.id === updatedProject.id);
        if (index > -1) {
          this.projects[index] = updatedProject;
        } else {
          this.projects.push(updatedProject);  // Si es un nuevo proyecto
        }
        this.updateProjectList();  // Forzar actualización de la UI tras actualizar
      }
    });

  }

  handleDelete(id: number): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => {
          this.projects = this.projects.filter(p => p.id !== id);
          this.updateProjectList(); // Forzar actualización de la UI tras eliminar
        },
        error: err => console.error('Error deleting project', err)
      });
    }
  }

  updateProjectList(): void {
    this.projects = [...this.projects]; // Reasignación para forzar la detección de cambios en Angular
  }
}
