import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TasksService} from "../../service/tasks-api.service";
import {Task} from "../../model/task.entity";

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.css'
})
export class EditTaskDialogComponent implements OnInit{

  task!: Task;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskId: number },
    private tasksApiService: TasksService
  ) { }

  ngOnInit(): void {
    this.tasksApiService.getTaskById(this.data.taskId)
      .subscribe(task => {
        this.task = task;
      });
  }

  updateTask() {
    this.tasksApiService.updateTask(this.task.id, this.task)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
