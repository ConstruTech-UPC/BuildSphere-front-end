import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-support-management',
  templateUrl: './support-management.component.html',
  styleUrl: './support-management.component.css'
})
export class SupportManagementComponent implements OnInit{
  projectId!: number;

  constructor(private route: ActivatedRoute) {}
  /*Implemented function to assign support to add new feature in future to get more questions on this page*/
  ngOnInit(): void {
    if (this.route.parent) {
      this.route.parent.params.subscribe(params => {
        this.projectId = +params['projectId'];
        if (!isNaN(this.projectId)) {
          console.log('Project ID:', this.projectId);  // Debug logging to verify projectId
        } else {
          console.error('Invalid Project ID:', params['projectId']);
        }
      });
    } else {
      console.error('No parent route found.');
    }
  }
}
