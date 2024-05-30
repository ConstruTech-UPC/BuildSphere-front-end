import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TasksService} from "../../../service/tasks-api.service";
import {Task} from "../../../model/task.entity";

import {provideNativeDateAdapter} from '@angular/material/core';
import {Team} from "../../../model/team.entity";
import {TeamsService} from "../../../service/teams-api.service";

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.css',
  providers: [provideNativeDateAdapter()],
})
export class AddTaskDialogComponent implements OnInit{

  task: Task = new Task();
  teams: Team[] = [];
  selectedTeam: number | undefined;

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number },
    private tasksApiService: TasksService,
    private teamsApiService: TeamsService

  ) { }

  ngOnInit(): void {
    this.task.projectId = this.data.projectId;
    this.loadTeams();
  }

  addTask() {
    if (this.selectedTeam !== undefined) {
      this.task.teamId = this.selectedTeam;
      this.tasksApiService.createTask(this.task.projectId, this.task)
          .subscribe(() => {
            this.dialogRef.close();
          });
    }
  }

  loadTeams() {
    this.teamsApiService.getTeamsByProject(this.data.projectId).subscribe(teams => {
      this.teams = teams;
    });
  }
}
