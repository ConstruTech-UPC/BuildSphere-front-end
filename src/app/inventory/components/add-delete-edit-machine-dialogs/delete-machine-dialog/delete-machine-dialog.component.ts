import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MachineryService} from "../../../services/machinery.service";
import {Machine} from "../../../model/machine.entity";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-delete-machine-dialog',
  templateUrl: './delete-machine-dialog.component.html',
  styleUrl: './delete-machine-dialog.component.css'
})
export class DeleteMachineDialogComponent implements OnInit {
  machine!: Machine;
  dataSource!: MatTableDataSource<any>;

  constructor( public dialogRef: MatDialogRef<DeleteMachineDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {machineId: number},
               private machineService: MachineryService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit() {
    this.machineService.getMachineById(this.data.machineId)
        .subscribe(machine => {this.machine = machine;});
  }

  deleteMachine(machineId: number) {
    this.machineService.deleteMachine(this.data.machineId)
      .subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter((machine: Machine) => {
          return machine.id !== machineId ? machine : false;
        });
        this.dialogRef.close();
      });
    console.log('Material deleted successfully', this.data.machineId);
  }

  cancel() {
    this.dialogRef.close();
  }

}


