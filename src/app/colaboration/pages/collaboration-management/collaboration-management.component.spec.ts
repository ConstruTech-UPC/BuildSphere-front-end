import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationManagementComponent } from './collaboration-management.component';

describe('CollaborationManagementComponent', () => {
  let component: CollaborationManagementComponent;
  let fixture: ComponentFixture<CollaborationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollaborationManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollaborationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
