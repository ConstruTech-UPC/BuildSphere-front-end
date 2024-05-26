import {Component, Inject, OnInit} from '@angular/core';
import {Material} from "../../../model/material.entity";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MaterialsService} from "../../../services/materials.service";

@Component({
  selector: 'app-add-material-dialog',
  templateUrl: './add-material-dialog.component.html',
  styleUrl: './add-material-dialog.component.css'
})
export class AddMaterialDialogComponent implements OnInit {

  material: Material = new Material();

  constructor( public dialogRef:MatDialogRef<AddMaterialDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {projectId: number},
               private materialService: MaterialsService) {}

  ngOnInit(): void {
    this.material.projectId = this.data.projectId;
  }

  addMaterial() {
    this.materialService.createMaterial(this.material.projectId, this.material)
      .subscribe(() => {this.dialogRef.close()})
  }
}
