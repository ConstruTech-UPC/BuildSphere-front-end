import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-information-management',
  templateUrl: './project-information-management.component.html',
  styleUrls: ['./project-information-management.component.css']
})
export class ProjectInformationManagementComponent {

  constructor(private router: Router) {}

  onProjectSelect(projectId: number) {
    this.router.navigate(['/projects', projectId]);
  }
}
