import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MachineryService} from "../../../services/machinery.service";

@Component({
  selector: 'app-delete-machine-dialog',
  templateUrl: './delete-machine-dialog.component.html',
  styleUrl: './delete-machine-dialog.component.css'
})
export class DeleteMachineDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DeleteMachineDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {machineId: number},
               private machineService: MachineryService) {
  }

  ngOnInit() { }

  deleteMachine() {
    this.machineService.deleteMachine(this.data.machineId)
      .subscribe(() => {this.dialogRef.close();});
  }

  cancel() {
    this.dialogRef.close();
  }

}


