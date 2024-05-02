import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Task} from "../../model/task.entity";
import {TasksService} from "../../service/tasks-api.service";
import {NgForm} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AddTaskDialogComponent} from "../add-delete-edit-task-dialogs/add-task-dialog/add-task-dialog.component";
import {EditTaskDialogComponent} from "../add-delete-edit-task-dialogs/edit-task-dialog/edit-task-dialog.component";
import {DeleteTaskDialogComponent} from "../add-delete-edit-task-dialogs/delete-task-dialog/delete-task-dialog.component";

@Component({
  selector: 'app-tasks-table',
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent implements OnInit{

  projectId: number = 1;
  tasks: Task[] = [];

  constructor(private dialog: MatDialog, private tasksApiService: TasksService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksApiService.getTasksByProject(this.projectId)
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      data: { projectId: this.projectId } // Pasamos el projectId al diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadTasks();
      // Puedes realizar acciones adicionales después de cerrar el diálogo si es necesario
    });
  }
  openEditDialog(taskId: number): void {
    if (taskId) {
      const dialogRef = this.dialog.open(EditTaskDialogComponent, {
        data: {taskId: taskId}
      });

      dialogRef.afterClosed().subscribe(result => {
        // Actualizar las tareas después de cerrar el diálogo
        this.loadTasks();
      });
    }
  }

  openDeleteDialog(taskId: number) {
    const dialogRef = this.dialog.open(DeleteTaskDialogComponent, {
      data: { taskId: taskId }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Actualizar las tareas después de cerrar el diálogo
      this.loadTasks();
    });
  }


}
