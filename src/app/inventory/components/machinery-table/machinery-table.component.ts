import {Component, Input, OnInit} from '@angular/core';
import {Machine} from "../../model/machine.entity";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MachineryService} from "../../services/machinery.service";
import {
  AddMachineDialogComponent
} from "../add-delete-edit-machine-dialogs/add-machine-dialog/add-machine-dialog.component";
import {
  EditMachineDialogComponent
} from "../add-delete-edit-machine-dialogs/edit-machine-dialog/edit-machine-dialog.component";
import {
  DeleteMachineDialogComponent
} from "../add-delete-edit-machine-dialogs/delete-machine-dialog/delete-machine-dialog.component";

@Component({
  selector: 'app-machinery-table',
  templateUrl: './machinery-table.component.html',
  styleUrl: './machinery-table.component.css'
})
export class MachineryTableComponent implements OnInit {
  @Input() projectId!: number;
  machinery: Machine[] = [];

  constructor(private dialog:MatDialog, private machineryService: MachineryService) { }

  ngOnInit(){
    this.loadMachinery();
  }

  loadMachinery(){
    this.machineryService.getMachinesByProject(this.projectId)
      .subscribe(machinery => { this.machinery = machinery;});
  }

  openAddDialog(){
    const dialogRef = this.dialog.open(AddMachineDialogComponent,
      {data: {projectId: this.projectId}});

    dialogRef.afterClosed()
      .subscribe(result => { console.log(`Dialog result: ${result}`);
        this.loadMachinery();});
  }

  openEditDialog(machineId: number): void {
    if(machineId){
      const dialogRef = this.dialog.open(EditMachineDialogComponent,
        {data: {machineId: machineId}});

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.loadMachinery();
      })
    }
  }

  openDeleteDialog(machineId: number) {
    const dialogRef = this.dialog.open(DeleteMachineDialogComponent,
      { data: {machineId: machineId}});

    dialogRef.afterClosed().subscribe(result => {
      this.loadMachinery();});
  }
}
