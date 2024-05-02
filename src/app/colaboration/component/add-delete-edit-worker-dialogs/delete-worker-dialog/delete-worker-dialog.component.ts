import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {WorkersService} from "../../../service/workers-api.service";

@Component({
  selector: 'app-delete-worker-dialog',
  templateUrl: './delete-worker-dialog.component.html',
  styleUrl: './delete-worker-dialog.component.css'
})
export class DeleteWorkerDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteWorkerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {workerId: number},
    private workersApiService: WorkersService
  ) { }

  ngOnInit(): void {
  }

  deleteWorker(){
    this.workersApiService.deleteWorker(this.data.workerId)
      .subscribe(() =>{
        this.dialogRef.close();
      });
  }

  cancel(){
    this.dialogRef.close();
  }
}
