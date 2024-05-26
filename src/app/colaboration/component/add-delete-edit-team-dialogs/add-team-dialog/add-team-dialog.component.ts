import {Component, Inject, OnInit} from '@angular/core';
import {Team} from "../../../model/team.entity";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeamsService} from "../../../service/teams-api.service";
import {TasksService} from "../../../service/tasks-api.service";

@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrl: './add-team-dialog.component.css'
})
export class AddTeamDialogComponent implements OnInit {

  team: Team = new Team();
  tasks: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number },
    private teamsApiService: TeamsService,
    private tasksApiService: TasksService
    ) { }

  ngOnInit(): void {
    this.team.projectId = this.data.projectId;
    this.loadTasks();
  }

  addTeam(){
    this.teamsApiService.createTeam(this.team.projectId,this.team)
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
