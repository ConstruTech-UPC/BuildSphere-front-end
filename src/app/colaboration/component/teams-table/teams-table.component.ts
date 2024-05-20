import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../model/task.entity";
import {Team} from "../../model/team.entity";
import {MatDialog} from "@angular/material/dialog";
import {TeamsService} from "../../service/teams-api.service";
import {AddTeamDialogComponent} from "../add-delete-edit-team-dialogs/add-team-dialog/add-team-dialog.component";
import {DeleteTeamDialogComponent} from "../add-delete-edit-team-dialogs/delete-team-dialog/delete-team-dialog.component";
import {EditTeamDialogComponent} from "../add-delete-edit-team-dialogs/edit-team-dialog/edit-team-dialog.component";

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrl: './teams-table.component.css'
})
export class TeamsTableComponent implements OnInit {

  @Input() projectId!: number;
  teams: Team[] = [];

  constructor(private dialog: MatDialog, private teamsApiService: TeamsService) { }

  ngOnInit(): void {
    this.loadTeams();
  }
  loadTeams(){
    this.teamsApiService.getTeamsByProject(this.projectId)
      .subscribe(teams=>{
        this.teams = teams;
      })
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddTeamDialogComponent,{
      data: {projectId: this.projectId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadTeams();
    });
  }

  openEditDialog(teamId: number): void {

    if(teamId) {
      const dialogRef = this.dialog.open(EditTeamDialogComponent, {
        data: {teamId: teamId}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.loadTeams();
      });
    }
  }

  openDeleteDialog(teamId: number) {
  const dialogRef = this.dialog.open(DeleteTeamDialogComponent, {
    data: {teamId: teamId}
  });

  dialogRef.afterClosed().subscribe(result => {
    this.loadTeams();
  });
  }


}
