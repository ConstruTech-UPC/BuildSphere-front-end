import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-collaboration-management',
  templateUrl: './collaboration-management.component.html',
  styleUrl: './collaboration-management.component.css'
})
export class CollaborationManagementComponent implements OnInit {

  projectId!: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    if (this.route.parent) {
      this.route.parent.params.subscribe(params => {
        this.projectId = +params['projectId'];
        if (!isNaN(this.projectId)) {
          console.log('Project ID in Collaboration:', this.projectId);  // Debug logging to verify projectId
        } else {
          console.error('Invalid Project ID:', params['projectId']);
        }
      });
    } else {
      console.error('No parent route found.');
    }
  }

}
