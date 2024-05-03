import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents-management',
  templateUrl: './documents-management.component.html',
  styleUrls: ['./documents-management.component.css']
})
export class DocumentsManagementComponent implements OnInit {

  projectId!: number;

  constructor(){}

  ngOnInit(): void {
    // Logic to get or set projectId
    this.projectId = 1;
  }

}
