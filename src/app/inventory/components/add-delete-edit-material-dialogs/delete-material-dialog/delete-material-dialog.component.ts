import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MaterialsService} from "../../../services/materials.service";


@Component({
  selector: 'app-delete-material-dialog',
  templateUrl: './delete-material-dialog.component.html',
  styleUrl: './delete-material-dialog.component.css'
})
export class DeleteMaterialDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DeleteMaterialDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {materialId: number},
               private materialService: MaterialsService) {
  }

  ngOnInit() { }

  deleteMaterial() {
    this.materialService.deleteMaterial(this.data.materialId)
      .subscribe(() => {this.dialogRef.close();});
  }

  cancel() {
    this.dialogRef.close();
  }

}
