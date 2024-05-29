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
  totalMaterialCost: number = 0;
  totalMachineryCost: number = 0;
  remainingBudget: number = 0;
  totalInventoryCost: number = 0;

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
            this.loadProjectData();
          console.log('Project ID: ', this.projectId);
        } else {
          console.error('Invalid Project ID: ', params['projectId']);
        }
      });
    } else {
      console.error('No parent route found.');
    }
  }

  loadProjectData() {
      console.log('hola');
    this.projectService.getProjectById(this.projectId)
        .subscribe((project: Project) => {
          this.project = project;
          this.loadInventoryData();
        });
  }

  loadInventoryData() {
    this.materialsService.getMaterialsByProject(this.projectId)
        .subscribe((materials: Material[]) => {
          this.totalMaterialCost = materials.reduce((sum, material) =>
              sum + material.totalCost, 0);
            }
        );

    this.machineryService.getMachinesByProject(this.projectId)
        .subscribe((machines: Machine[]) => {
          this.totalMachineryCost = machines.reduce((sum, machine) =>
          sum + machine.totalCost, 0);
            this.totalInventoryCost = this.totalMaterialCost + this.totalMachineryCost;
            this.calculateRemainingBudget();
        });


  }

  calculateRemainingBudget() {
    this.remainingBudget = this.project.budget - (this.totalInventoryCost);
  }
}
