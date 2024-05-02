import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Task} from "../../model/task.entity";
import {TasksService} from "../../service/tasks-api.service";
import {NgForm} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

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
    // Aquí abrirías el diálogo para agregar una nueva tarea
  }

  openDeleteDialog(task: Task) {
    // Aquí abrirías el diálogo para eliminar la tarea seleccionada
  }

  openEditDialog(task: Task) {
    // Aquí abrirías el diálogo para editar la tarea seleccionada
  }
}
