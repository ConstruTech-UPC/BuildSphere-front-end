import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../model/project.entity';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project: Project = new Project();
  @Output() edit = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<number>();
  @Output() titleClick = new EventEmitter<number>(); // Add this line

  constructor() {}

  onEdit(event: Event): void {
    event.stopPropagation(); // Prevent the event from bubbling up
    this.edit.emit(this.project);
  }

  onDelete(event: Event): void {
    event.stopPropagation(); // Prevent the event from bubbling up
    this.delete.emit(this.project.id);
  }

  onTitleClick(): void { // Add this method
    this.titleClick.emit(this.project.id);
  }
}
