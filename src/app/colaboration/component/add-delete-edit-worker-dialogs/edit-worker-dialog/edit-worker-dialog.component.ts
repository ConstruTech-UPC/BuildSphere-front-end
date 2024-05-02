import {Component, Inject, OnInit} from '@angular/core';
import {Worker} from "../../../model/worker.entity";
import {EditTaskDialogComponent} from "../../add-delete-edit-task-dialogs/edit-task-dialog/edit-task-dialog.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {WorkersService} from "../../../service/workers-api.service";

@Component({
  selector: 'app-edit-worker-dialog',
  templateUrl: './edit-worker-dialog.component.html',
  styleUrl: './edit-worker-dialog.component.css'
})
export class EditWorkerDialogComponent implements OnInit {

  worker!: Worker;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { workerId: number },
    private workersApiService: WorkersService
  ){ }

  ngOnInit(): void {
    this.workersApiService.getWorkerById(this.data.workerId)
      .subscribe(worker =>{
        this.worker = worker;
      });
  }

  updateWorker(){
    this.workersApiService.updateWorker(this.worker.id, this.worker)
      .subscribe(() => {
        this.dialogRef.close();
      })
  }
}
