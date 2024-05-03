import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../../model/project.entity'
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  editing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProjectFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project },
    private projectsService: ProjectsService)
  {
    this.projectForm = this.fb.group({
      id: [data.project?.id],
      name: [data.project?.name, Validators.required],
      description: [data.project?.description, Validators.required],
      location: [data.project?.location, Validators.required],
      startDate: [data.project?.startDate, Validators.required],
      expectedEndDate: [data.project?.expectedEndDate, Validators.required],
      budget: [data.project?.budget, Validators.required],
      urlImage: [data.project?.urlImage, Validators.required]
    });

    this.editing = !!data.project;
  }
  onSubmit(): void {
    console.log("onSubmit called with form value:", this.projectForm.value);
    if (this.projectForm.valid) {
      if (this.editing) {
        this.projectsService.updateProject(this.projectForm.value).subscribe({
          next: (project) => {
            console.log('Project updated', project);
            this.dialogRef.close(project);  // Devuelve el proyecto actualizado
          },
          error: (error) => console.error('Failed to update project', error)
        });
      } else {
        this.projectsService.createProject(this.projectForm.value).subscribe({
          next: (project) => {
            console.log('Project created', project);
            this.dialogRef.close(project);  // Devuelve el proyecto creado
          },
          error: (error) => console.error('Failed to create project', error)
        });
      }
    }
  }


  ngOnInit(): void {
  }
}
