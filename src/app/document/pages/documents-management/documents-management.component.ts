import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-documents-management',
  templateUrl: './documents-management.component.html',
  styleUrls: ['./documents-management.component.css']
})
export class DocumentsManagementComponent implements OnInit {
  projectId!: number;

  constructor(private route: ActivatedRoute) {}

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
