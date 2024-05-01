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
export class CollaborationManagementComponent implements OnInit, AfterViewInit {

  taskData: Task;
  dataSource!: MatTableDataSource<any>;
  displayedTaskColumns: string[] = ['id', 'taskName', 'taskDescription', 'taskStartDate', 'taskEndDate', 'actions'];
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  isEditMode: boolean;

  constructor(private taskService: TasksService){
    this.isEditMode = false;
    this.taskData = {} as Task;
    this.dataSource = new MatTableDataSource<any>();
  }

  onEditItem(element: Task){
    this.isEditMode = true;
    this.taskData = element;
  }

  onDeleteItem(element: Task){
    this.deleteTask(element.id);
  }

  onCancelEdit(){
    this.resetEditState();
    this.getAllTasks();
  }

  onStudentAdded(element: Task){
    this.taskData = element;
    this.createStudent();
    this.resetEditState();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllTasks();
  }


  private resetEditState(): void {
    this.isEditMode = false;
    this.taskData = {} as Task;
  }

  private getAllTasks(){
    this.taskService.getAll().subscribe((response:any)=>{
      this.dataSource.data = response;
    });
  };

  private createStudent(){
    this.taskService.create(this.taskData).subscribe((response:any)=>{
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((task:Task)=>{
        return task;
      });
    });
  };

  private updateTask(){
    let taskToUpdate = this.taskData;
    this.taskService.update(this.taskData.id, taskToUpdate).subscribe((response:any)=>{
      this.dataSource.data = this.dataSource.data.map((task:Task)=>{
        if(task.id === response.id){
          return response;
        }
        return task;
      });
    });
  };

  private deleteTask(taskId: number){
    this.taskService.delete(taskId).subscribe((response:any)=>{
      this.dataSource.data = this.dataSource.data.filter((task:Task)=>{
        return task.id !== taskId ? task : false;
      });
    });
  };




}
