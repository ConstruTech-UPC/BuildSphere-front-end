import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../model/project.entity';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {
  project: Project | undefined;
  projects: Project[] = []; // Declare the projects property here

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}