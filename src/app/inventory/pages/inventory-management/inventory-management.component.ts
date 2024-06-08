import {Component, OnInit} from '@angular/core';
import {MachineryService} from "../../services/machinery.service";
import {MaterialsService} from "../../services/materials.service";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../../../management/model/project.entity";
import {ProjectsService} from "../../../management/services/projects.service";
import {Material} from "../../model/material.entity";
import {Machine} from "../../model/machine.entity";

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.css'
})
export class InventoryManagementComponent implements OnInit {
  projectId!: number;
  project: Project = new Project();

  //constructor(private machineryService: MachineryService, private materialsService: MaterialsService) { }
  constructor(
      private route: ActivatedRoute,
      private machineryService: MachineryService,
      private materialsService: MaterialsService,
      private projectService: ProjectsService) {
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
