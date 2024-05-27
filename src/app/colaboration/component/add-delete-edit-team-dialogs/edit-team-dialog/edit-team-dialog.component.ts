import {Component, Inject, OnInit} from '@angular/core';
import {Team} from "../../../model/team.entity";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeamsService} from "../../../service/teams-api.service";
import {TasksService} from "../../../service/tasks-api.service";

@Component({
  selector: 'app-edit-team-dialog',
  templateUrl: './edit-team-dialog.component.html',
  styleUrl: './edit-team-dialog.component.css'
})
export class EditTeamDialogComponent implements OnInit {

  team!: Team;
  tasks: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { teamId: number, projectId: number },
    private teamsApiService: TeamsService,
    private tasksApiService: TasksService
  ) { }

  ngOnInit(): void {
    this.teamsApiService.getTeamById(this.data.teamId)
      .subscribe(team=>{
        this.team = team;
      });
    this.loadTasks();
  }

  updateTeam() {
    this.teamsApiService.updateTeam(this.team.id, this.team)
      .subscribe(() => {
        this.dialogRef.close();
      })
  }

  loadTasks(): void {
    this.tasksApiService.getTasksByProject(this.data.projectId).subscribe(tasks => {
      this.tasks = tasks;
    })
  }

}
