import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Task} from "../../model/task.entity";
import {TasksService} from "../../service/tasks-api.service";
import {NgForm} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AddTaskDialogComponent} from "../add-delete-edit-task-dialogs/add-task-dialog/add-task-dialog.component";
import {EditTaskDialogComponent} from "../add-delete-edit-task-dialogs/edit-task-dialog/edit-task-dialog.component";
import {DeleteTaskDialogComponent} from "../add-delete-edit-task-dialogs/delete-task-dialog/delete-task-dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-tasks-table',
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent implements OnInit{

  @Input() projectId!: number;


  dataSource: MatTableDataSource<Task> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private tasksApiService: TasksService) { }


  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksApiService.getTasksByProject(this.projectId)
      .subscribe(tasks => {
        this.dataSource.data = tasks;
        this.dataSource.paginator = this.paginator;
      });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '500px',
      height: '400px',
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
        width: '500px',
        height: '400px',
        data: {taskId: taskId}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
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
