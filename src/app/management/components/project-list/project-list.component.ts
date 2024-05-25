import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Project } from '../../model/project.entity';
import { ProjectsService } from '../../services/projects.service';
import { ProjectFormComponent } from '../project-form/project-form.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  @Output() projectSelect = new EventEmitter<number>();

  constructor(private projectService: ProjectsService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => console.error('There was an error!', error)
    });
  }

  onProjectClick(projectId: number) {
    this.projectSelect.emit(projectId);
    this.router.navigate(['/projects', projectId]); // Navigate to the project-specific route
  }

  openCreateDialog(): void {
  const dialogRef = this.dialog.open(ProjectFormComponent, {
    width: '500px',
    data: { project: null }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.projectService.createProject(result).subscribe({
        next: (newProject) => {
          this.projects.push(newProject);
          this.loadProjects();
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
          this.projects.push(updatedProject);
        }
        this.loadProjects();
      }
    });
  }

  handleDelete(id: number): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => {
          this.projects = this.projects.filter(p => p.id !== id);
          this.loadProjects();
        },
        error: err => console.error('Error deleting project', err)
      });
    }
  }
}
