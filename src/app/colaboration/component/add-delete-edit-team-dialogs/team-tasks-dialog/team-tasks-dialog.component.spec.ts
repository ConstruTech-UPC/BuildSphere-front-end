import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTasksDialogComponent } from './team-tasks-dialog.component';

describe('TeamTasksDialogComponent', () => {
  let component: TeamTasksDialogComponent;
  let fixture: ComponentFixture<TeamTasksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamTasksDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamTasksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
