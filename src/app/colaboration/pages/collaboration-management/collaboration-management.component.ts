import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Task} from "../../model/task.entity";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TasksService} from "../../service/tasks-api.service";

@Component({
  selector: 'app-collaboration-management',
  templateUrl: './collaboration-management.component.html',
  styleUrl: './collaboration-management.component.css'
})
export class CollaborationManagementComponent implements OnInit {

  projectId!: number;

  constructor(){}

  ngOnInit(): void {
    // Lógica para obtener o establecer projectId
    this.projectId = 1;
  }

}
