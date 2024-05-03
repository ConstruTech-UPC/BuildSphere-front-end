import {Component, Inject, OnInit} from '@angular/core';
import {Team} from "../../../model/team.entity";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeamsService} from "../../../service/teams-api.service";

@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrl: './add-team-dialog.component.css'
})
export class AddTeamDialogComponent implements OnInit {

  team: Team = new Team();

  constructor(
    public dialogRef: MatDialogRef<AddTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number },
    private teamsApiService: TeamsService
    ) { }

  ngOnInit(): void {
    this.team.projectId = this.data.projectId;
  }

  addTeam(){
    this.teamsApiService.createTeam(this.team.projectId,this.team)
    .subscribe(() => {
      this.dialogRef.close();
    })
  }
}
