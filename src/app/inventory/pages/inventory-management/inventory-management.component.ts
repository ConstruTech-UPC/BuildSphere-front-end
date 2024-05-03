import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.css'
})
export class InventoryManagementComponent {
  projectId!: number;

  constructor() { }

  ngOnInit() {
    // to get the project's id
    this.projectId = 1;
  }
}
