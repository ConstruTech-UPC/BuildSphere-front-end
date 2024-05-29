import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MaterialsService} from "../../../services/materials.service";
import {Material} from "../../../model/material.entity";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-delete-material-dialog',
  templateUrl: './delete-material-dialog.component.html',
  styleUrl: './delete-material-dialog.component.css'
})
export class DeleteMaterialDialogComponent implements OnInit {
  material!: Material;
  dataSource!: MatTableDataSource<any>;

  constructor( public dialogRef: MatDialogRef<DeleteMaterialDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {materialId: number},
               private materialService: MaterialsService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit() { }

  deleteMaterial() {
    this.materialService.deleteMaterial(this.data.materialId)
      .subscribe(() => {
        /*this.dataSource.data = this.dataSource.data.filter((material: Material) => {
          return material.id !== materialId ? material : false;
        });*/
        this.dialogRef.close();
      });
    console.log('Material deleted successfully', this.data.materialId);
  }

  cancel() {
    this.dialogRef.close();
  }

}
