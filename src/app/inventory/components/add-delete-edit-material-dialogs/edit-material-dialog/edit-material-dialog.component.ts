import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Material} from "../../../model/material.entity";
import {MaterialsService} from "../../../services/materials.service";

@Component({
  selector: 'app-edit-material-dialog',
  templateUrl: './edit-material-dialog.component.html',
  styleUrl: './edit-material-dialog.component.css'
})
export class EditMaterialDialogComponent implements OnInit {
  material!: Material; //waits for the edit

  constructor( public dialogRef: MatDialogRef<EditMaterialDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {materialId: number},
               private materialService: MaterialsService) { }

  ngOnInit() {
    this.materialService.getMaterialById(this.data.materialId)
      .subscribe(material => {this.material = material;});
  }

  updateMaterial() {
    this.material.projectId = Number(this.material.projectId);
    this.material.amount = Number(this.material.amount);
    this.material.totalCost = Number(this.material.totalCost);
    this.materialService.updateMaterial(this.material.id, this.material)
      .subscribe(() => this.dialogRef.close());
  }
}
