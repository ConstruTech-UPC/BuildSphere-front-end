import {Component, Inject, OnInit} from '@angular/core';
import {Worker} from "../../../model/worker.entity";
import {EditTaskDialogComponent} from "../../add-delete-edit-task-dialogs/edit-task-dialog/edit-task-dialog.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {WorkersService} from "../../../service/workers-api.service";
import {TeamsService} from "../../../service/teams-api.service";

@Component({
  selector: 'app-edit-worker-dialog',
  templateUrl: './edit-worker-dialog.component.html',
  styleUrl: './edit-worker-dialog.component.css'
})
export class EditWorkerDialogComponent implements OnInit {

  worker!: Worker;
  teams: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { workerId: number, projectId: number},
    private workersApiService: WorkersService,
    private teamsApiService: TeamsService
  ){ }

  ngOnInit(): void {
    this.workersApiService.getWorkerById(this.data.workerId)
      .subscribe(worker =>{
        this.worker = worker;
      });
    this.loadTeams()
  }

  updateWorker(){
    this.workersApiService.updateWorker(this.worker.id, this.worker)
      .subscribe(() => {
        this.dialogRef.close();
      })
  }

  loadTeams() {
    this.teamsApiService.getTeamsByProject(this.data.projectId).subscribe(teams => {
      this.teams = teams;
    });

  }
}
