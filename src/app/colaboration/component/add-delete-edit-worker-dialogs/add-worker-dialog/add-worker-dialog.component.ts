import {Component, Inject, OnInit} from '@angular/core';

import {Worker} from "../../../model/worker.entity";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {WorkersService} from "../../../service/workers-api.service";

@Component({
  selector: 'app-add-worker-dialog',
  templateUrl: './add-worker-dialog.component.html',
  styleUrl: './add-worker-dialog.component.css'
})
export class AddWorkerDialogComponent implements OnInit {

  worker: Worker = new Worker();

  constructor(
    public dialogRef: MatDialogRef<AddWorkerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {projectId: number},
    private workersApiService: WorkersService
  ) {}

  ngOnInit(): void {

    this.worker.projectId = this.data.projectId;
  }

  addWorker(){
    this.workersApiService.createWorker(this.worker.projectId, this.worker)
      .subscribe(() =>{
        this.dialogRef.close();
      });
  }
}
