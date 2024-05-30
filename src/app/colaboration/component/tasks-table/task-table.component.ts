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
import {TeamsService} from "../../service/teams-api.service";
import {forkJoin, map} from "rxjs";

@Component({
  selector: 'app-tasks-table',
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent implements OnInit{

  @Input() projectId!: number;
  dataSource: MatTableDataSource<Task> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private tasksApiService: TasksService, private teamsService: TeamsService) { }


  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksApiService.getTasksByProject(this.projectId).subscribe(tasks => {
      const teamRequests = tasks.map(task =>
              this.teamsService.getTeamById(task.teamId).pipe(
                  map(team => ({
                    ...task,
                    teamName: team.teamName
                  }))
              )
          );
          forkJoin(teamRequests).subscribe(updatedTasks => {
            this.dataSource.data = updatedTasks;
            this.dataSource.paginator = this.paginator;
          }, error => {
            console.error('Failed to load team names', error);
          });
        });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      data: { projectId: this.projectId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadTasks();

    });
  }
  openEditDialog(taskId: number): void {
    if (taskId) {
      const dialogRef = this.dialog.open(EditTaskDialogComponent, {
        data: {taskId: taskId, projectId: this.projectId}
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
      this.loadTasks();
    });
  }


}
