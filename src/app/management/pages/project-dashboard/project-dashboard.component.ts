import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';
import { Project } from '../../model/project.entity';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent {
  projects: Project[] = [];

  constructor(public dialog: MatDialog, private projectsService: ProjectsService, private router: Router) {}

  onProjectSelect(projectId: number) {
    this.router.navigate(['/documents', projectId]);
  }
}


