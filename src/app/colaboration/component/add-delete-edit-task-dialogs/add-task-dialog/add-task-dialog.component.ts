import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TasksService} from "../../../service/tasks-api.service";
import {Task} from "../../../model/task.entity";

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.css'
})
export class AddTaskDialogComponent implements OnInit{

  task: Task = new Task();

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number }, // Recibimos el projectId como dato
    private tasksApiService: TasksService
  ) { }

  ngOnInit(): void {
    this.task.projectId = this.data.projectId; // Asignamos el projectId a la tarea
  }

  addTask() {
    this.tasksApiService.createTask(this.task.projectId, this.task)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }


}
