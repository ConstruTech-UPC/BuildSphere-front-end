import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/task.entity";
import {Team} from "../../model/team.entity";
import {MatDialog} from "@angular/material/dialog";
import {TeamsService} from "../../service/teams-api.service";

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrl: './teams-table.component.css'
})
export class TeamsTableComponent implements OnInit {

  projectId: number = 1;
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

  }

  openEditDialog() {

  }

  openDeleteDialog() {

  }


}
