import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TasksService} from "../../service/tasks-api.service";

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrl: './delete-task-dialog.component.css'
})
export class DeleteTaskDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskId: number },
    private tasksApiService: TasksService
  ) { }

  ngOnInit(): void {
  }

  deleteTask() {
    this.tasksApiService.deleteTask(this.data.taskId)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }

  cancel() {
    this.dialogRef.close();
  }

}
