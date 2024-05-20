import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MachineryService} from "../../../services/machinery.service";
import {Machine} from "../../../model/machine.entity";

@Component({
  selector: 'app-delete-machine-dialog',
  templateUrl: './delete-machine-dialog.component.html',
  styleUrl: './delete-machine-dialog.component.css'
})
export class DeleteMachineDialogComponent implements OnInit {
  machine!: Machine;

  constructor( public dialogRef: MatDialogRef<DeleteMachineDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {machineId: number},
               private machineService: MachineryService) {
  }

  ngOnInit() {
    this.machineService.getMachineById(this.data.machineId)
        .subscribe(machine => {this.machine = machine;});
  }

  deleteMachine() {
    this.machineService.deleteMachine(this.data.machineId)
      .subscribe(() => {this.dialogRef.close();});
  }

  cancel() {
    this.dialogRef.close();
  }

}


