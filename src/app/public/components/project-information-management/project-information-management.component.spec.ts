import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInformationManagementComponent } from './project-information-management.component';

describe('ProjectInformationManagementComponent', () => {
  let component: ProjectInformationManagementComponent;
  let fixture: ComponentFixture<ProjectInformationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectInformationManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectInformationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
