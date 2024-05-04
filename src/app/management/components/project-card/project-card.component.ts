import {Component, Input,Output, EventEmitter} from '@angular/core';
import { Project } from '../../model/project.entity';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project: Project = new Project();
  @Output() edit = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  onEdit(): void {
    this.edit.emit(this.project);
  }

  onDelete(): void {
    this.delete.emit(this.project.id);
  }
}
