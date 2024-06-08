import {Component, Inject, OnInit} from '@angular/core';
import {Machine} from "../../../model/machine.entity";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MachineryService} from "../../../services/machinery.service";

@Component({
  selector: 'app-add-machine-dialog',
  templateUrl: './add-machine-dialog.component.html',
  styleUrl: './add-machine-dialog.component.css'
})
export class AddMachineDialogComponent implements OnInit {
  machine: Machine = new Machine();

  constructor( public dialogRef: MatDialogRef<AddMachineDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: { projectId: number}, //injection token to access data
               private machineService: MachineryService) {
  }

  ngOnInit(): void {
   this.machine.projectId = this.data.projectId;
  }

  addMachine() {
    this.machine.projectId = Number(this.machine.projectId);
    this.machine.totalCost = Number(this.machine.totalCost);
   this.machineService.createMachine(this.machine.projectId, this.machine)
     .subscribe(() => {this.dialogRef.close();});
  }

}
