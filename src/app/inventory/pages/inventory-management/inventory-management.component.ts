import {Component, OnInit} from '@angular/core';
import {MachineryService} from "../../services/machinery.service";
import {MaterialsService} from "../../services/materials.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.css'
})
export class InventoryManagementComponent implements OnInit {
  projectId!: number;

  //constructor(private machineryService: MachineryService, private materialsService: MaterialsService) { }
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.parent) {
      this.route.parent.params.subscribe(params => {
        this.projectId = +params['projectId'];
        if (!isNaN(this.projectId)) {
          console.log('Project ID: ', this.projectId);
        } else {
          console.error('Invalid Project ID: ', params['projectId']);
        }
      });
    } else {
      console.error('No parent route found.');
    }
  }
}
