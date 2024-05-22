import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../../management/services/projects.service';
import { Project } from '../../../management/model/project.entity';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isSidenavOpen: boolean = true;
  selectedProject: Project | undefined;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = +params['projectId'];
      if (projectId) {
        this.projectsService.getProjectById(projectId).subscribe((project: Project) => {
          this.selectedProject = project;
        });
      }
    });
  }
}
