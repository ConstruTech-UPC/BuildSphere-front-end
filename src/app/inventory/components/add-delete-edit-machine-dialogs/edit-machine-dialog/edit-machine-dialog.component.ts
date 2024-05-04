import {Component, Inject, OnInit} from '@angular/core';
import {Machine} from "../../../model/machine.entity";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MachineryService} from "../../../services/machinery.service";

@Component({
  selector: 'app-edit-machine-dialog',
  templateUrl: './edit-machine-dialog.component.html',
  styleUrl: './edit-machine-dialog.component.css'
})
export class EditMachineDialogComponent implements OnInit {
  machine!: Machine; //waits for the edit

  constructor( public dialogRef: MatDialogRef<EditMachineDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {machineId: number},
               private machineService: MachineryService) { }

  ngOnInit() {
    this.machineService.getMachineById(this.data.machineId)
      .subscribe(machine => {this.machine = machine;});
  }

  updateMachine() {
    this.machineService.updateMachine(this.machine.id, this.machine)
      .subscribe(() => this.dialogRef.close());
  }
}
