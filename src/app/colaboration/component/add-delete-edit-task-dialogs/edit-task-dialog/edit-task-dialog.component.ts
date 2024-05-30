import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TasksService} from "../../../service/tasks-api.service";
import {Task} from "../../../model/task.entity";
import {provideNativeDateAdapter} from "@angular/material/core";
import {Team} from "../../../model/team.entity";
import {TeamsService} from "../../../service/teams-api.service";

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.css',
  providers: [provideNativeDateAdapter()],
})
export class EditTaskDialogComponent implements OnInit{

  task!: Task;
  teams: Team[] = [];
  selectedTeam: number | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskId: number, projectId: number },
    private tasksApiService: TasksService,
    private teamsApiService: TeamsService

  ) { }

  ngOnInit(): void {
    this.tasksApiService.getTaskById(this.data.taskId)
      .subscribe(task => {
        this.task = task;
      });
    this.loadTeams();
  }

  updateTask() {
    if (this.selectedTeam !== undefined) {
      this.task.teamId = this.selectedTeam;
      this.tasksApiService.updateTask(this.task.id, this.task)
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
