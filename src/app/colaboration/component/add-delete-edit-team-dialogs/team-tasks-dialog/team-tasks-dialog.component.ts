import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Team} from "../../../model/team.entity";
import {Task} from "../../../model/task.entity";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TeamsService} from "../../../service/teams-api.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {TasksService} from "../../../service/tasks-api.service";

@Component({
  selector: 'app-team-tasks-dialog',
  templateUrl: './team-tasks-dialog.component.html',
  styleUrl: './team-tasks-dialog.component.css'
})
export class TeamTasksDialogComponent implements OnInit{

  dataSource: MatTableDataSource<Task> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
      public dialogRef: MatDialogRef<TeamTasksDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { teamId: number, projectId: number },
      private teamsApiService: TeamsService,
      private tasksApiService: TasksService
      ) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(){
    this.tasksApiService.getTaskByIdTeam(this.data.teamId)
        .subscribe(tasks=>{
          this.dataSource.data = tasks;
          this.dataSource.paginator = this.paginator;
        })
  }
}
