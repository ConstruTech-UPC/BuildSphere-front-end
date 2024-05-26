import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {MatDialog} from "@angular/material/dialog";
import {Material} from "../../model/material.entity";
import {MaterialsService} from "../../services/materials.service";
import {
  AddMaterialDialogComponent
} from "../add-delete-edit-material-dialogs/add-material-dialog/add-material-dialog.component";
import {
  EditMaterialDialogComponent
} from "../add-delete-edit-material-dialogs/edit-material-dialog/edit-material-dialog.component";
import {
  DeleteMaterialDialogComponent
} from "../add-delete-edit-material-dialogs/delete-material-dialog/delete-material-dialog.component";

@Component({
  selector: 'app-materials-table',
  templateUrl: './materials-table.component.html',
  styleUrl: './materials-table.component.css'
})
export class MaterialsTableComponent implements OnInit, OnChanges {
  @Input() projectId!: number;
  materials: Material[] = [];

  constructor(private dialog:MatDialog, private materialsService: MaterialsService) { }

  ngOnInit(){
    this.loadMaterials();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['projectId'] && !changes['projectId'].firstChange) {
      this.loadMaterials();
    }
  }

  loadMaterials() {
    if (this.projectId && !isNaN(this.projectId)) {
      console.log('Loading materials for projectId: ', this.projectId);
      this.materialsService.getMaterialsByProject(this.projectId)
          .subscribe(materials => {
            this.materials = materials;
            console.log('Materials loaded: ', materials);
          });
    } else {
      console.error('Invalid projectId: ', this.projectId);
    }
  }

  openAddDialog(){
    const dialogRef = this.dialog.open(AddMaterialDialogComponent,
      {data: {projectId: this.projectId}});

    dialogRef.afterClosed()
      .subscribe(result => { console.log(`Dialog result: ${result}`);
        this.loadMaterials();});
  }

  openEditDialog(materialId: number): void {
    if(materialId){
      const dialogRef = this.dialog.open(EditMaterialDialogComponent,
        {data: {materialId: materialId}});

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.loadMaterials();
      })
    }
  }

  openDeleteDialog(materialId: number) {
    const dialogRef = this.dialog.open(DeleteMaterialDialogComponent,
      { data: {materialId: materialId}});

    dialogRef.afterClosed().subscribe(result => {
      this.loadMaterials();});
  }
}
