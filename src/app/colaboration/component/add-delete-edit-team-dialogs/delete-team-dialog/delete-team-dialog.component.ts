import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TeamsService} from "../../../service/teams-api.service";

@Component({
  selector: 'app-delete-team-dialog',
  templateUrl: './delete-team-dialog.component.html',
  styleUrl: './delete-team-dialog.component.css'
})
export class DeleteTeamDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { teamId: number },
    private teamsApiService: TeamsService
  ){ }

  ngOnInit(): void {
  }

  deleteTeam(){
    this.teamsApiService.deleteTeam(this.data.teamId)
    .subscribe(()=>{
      this.dialogRef.close();
    });
  }

  cancel() {
    this.dialogRef.close();
  }

}
