import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WorkersService} from "../../service/workers-api.service";
import {Worker} from "../../model/worker.entity";
import {AddWorkerDialogComponent} from "../add-delete-edit-worker-dialogs/add-worker-dialog/add-worker-dialog.component";
import {
  DeleteWorkerDialogComponent
} from "../add-delete-edit-worker-dialogs/delete-worker-dialog/delete-worker-dialog.component";
import {
  EditWorkerDialogComponent
} from "../add-delete-edit-worker-dialogs/edit-worker-dialog/edit-worker-dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {Task} from "../../model/task.entity";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrl: './workers-table.component.css'
})
export class WorkersTableComponent implements OnInit {

  @Input() projectId!: number;
  workers: Worker[] = [];


  dataSource: MatTableDataSource<Worker> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private workerService: WorkersService) { }

  ngOnInit(): void {
    this.loadWorkers();
  }

  loadWorkers(): void {
    this.workerService.getWorkerByProject(this.projectId)
      .subscribe(workers =>{
        this.dataSource.data = workers;
        this.dataSource.paginator = this.paginator;
      });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddWorkerDialogComponent, {
      width: '500px',
      height: '400px',
      data: {projectId: this.projectId}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadWorkers();
    })
  }

  openEditDialog(workerId: number): void {
  if (workerId) {
    const dialogRef = this.dialog.open(EditWorkerDialogComponent, {
      width: '500px',
      height: '400px',
      data: {workerId: workerId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadWorkers();
    })
  }

  }

  openDeleteDialog(workerId: number) {
    const dialogRef = this.dialog.open(DeleteWorkerDialogComponent, {
      data: {workerId: workerId}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadWorkers();
    })
  }

}
