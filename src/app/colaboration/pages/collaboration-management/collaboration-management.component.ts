import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';



@Component({
  selector: 'app-collaboration-management',
  templateUrl: './collaboration-management.component.html',
  styleUrl: './collaboration-management.component.css'
})
export class CollaborationManagementComponent implements OnInit {

  projectId!: number;

  constructor(){}

  ngOnInit(): void {
    // Lógica para obtener o establecer projectId
    this.projectId = 1;
  }

}
