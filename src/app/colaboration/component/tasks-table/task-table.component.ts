import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Task} from "../../model/task.entity";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tasks-table',
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent {

  @Input() task: Task;
  @Input() editMode = false;
  @Output() taskAdded = new EventEmitter<Task>();
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() editCanceled = new EventEmitter();
  @ViewChild('taskForm', {static: false}) taskForm!: NgForm;

  constructor() {
    this.task = {} as Task;
  }

  private resetEditState(){
    this.editMode = false;
    this.taskForm.reset();
    this.task = {} as Task;
  }

  onSubmit(){
    if(this.taskForm.form.valid){
      if(this.editMode){
        this.taskUpdated.emit(this.task);
      }else{
        this.taskAdded.emit(this.task);
      }
      this.resetEditState();
    }else {
      console.log('invalid data');
    }
  }
  onCancel(){
    this.resetEditState();
    this.editCanceled.emit();
  }

}
