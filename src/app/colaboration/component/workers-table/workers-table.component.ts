import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WorkersService} from "../../service/workers-api.service";
import {Worker} from "../../model/worker.entity";
import {AddWorkerDialogComponent} from "../add-delete-edit-worker-dialogs/add-worker-dialog/add-worker-dialog.component";
import {
  DeleteWorkerDialogComponent
} from "../add-delete-edit-worker-dialogs/delete-worker-dialog/delete-worker-dialog.component";
import {
  EditWorkerDialogComponent
} from "../add-delete-edit-worker-dialogs/edit-worker-dialog/edit-worker-dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {TeamsService} from "../../service/teams-api.service";
import {Team} from "../../model/team.entity";
import {forkJoin, map} from "rxjs";

@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrl: './workers-table.component.css'
})
export class WorkersTableComponent implements OnInit {

  @Input() projectId!: number;
  dataSource: MatTableDataSource<Worker> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private workerService: WorkersService, private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.loadWorkers();
  }

  loadWorkers(): void {
    this.workerService.getWorkerByProject(this.projectId).subscribe(workers => {
      const teamRequests = workers.map(worker =>
          this.teamsService.getTeamById(worker.teamId).pipe(
              map(team => ({
                ...worker,
                teamName: team.teamName
              }))
          )
      );
      forkJoin(teamRequests).subscribe(updatedWorkers => {
        this.dataSource.data = updatedWorkers;
        this.dataSource.paginator = this.paginator;
      }, error => {
        console.error('Failed to load team names', error);
      });
    });
  }


  openAddDialog() {
    const dialogRef = this.dialog.open(AddWorkerDialogComponent, {
      data: {projectId: this.projectId}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadWorkers();
    })
  }

  openEditDialog(workerId: number): void {
  if (workerId) {
    const dialogRef = this.dialog.open(EditWorkerDialogComponent, {
      data: {workerId: workerId, projectId: this.projectId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadWorkers();
    })
  }

  }

  openDeleteDialog(workerId: number) {
    const dialogRef = this.dialog.open(DeleteWorkerDialogComponent, {
      data: {workerId: workerId}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadWorkers();
    })
  }



}
