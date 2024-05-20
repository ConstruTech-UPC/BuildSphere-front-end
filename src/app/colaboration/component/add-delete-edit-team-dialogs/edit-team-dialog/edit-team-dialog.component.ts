import {Component, Inject, OnInit} from '@angular/core';
import {Team} from "../../../model/team.entity";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeamsService} from "../../../service/teams-api.service";

@Component({
  selector: 'app-edit-team-dialog',
  templateUrl: './edit-team-dialog.component.html',
  styleUrl: './edit-team-dialog.component.css'
})
export class EditTeamDialogComponent implements OnInit {

  team!: Team;

  constructor(
    public dialogRef: MatDialogRef<EditTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { teamId: number },
    private teamsApiService: TeamsService
  ) { }

  ngOnInit(): void {
    this.teamsApiService.getTeamById(this.data.teamId)
      .subscribe(team=>{
        this.team = team;
      })
  }

  updateTeam() {
    this.teamsApiService.updateTeam(this.team.id, this.team)
      .subscribe(() => {
        this.dialogRef.close();
      })
  }


}
