import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMachineDialogComponent } from './add-machine-dialog.component';

describe('AddMachineDialogComponent', () => {
  let component: AddMachineDialogComponent;
  let fixture: ComponentFixture<AddMachineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMachineDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMachineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
