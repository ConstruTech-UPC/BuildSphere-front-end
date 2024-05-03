import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMachineDialogComponent } from './delete-machine-dialog.component';

describe('DeleteMachineDialogComponent', () => {
  let component: DeleteMachineDialogComponent;
  let fixture: ComponentFixture<DeleteMachineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteMachineDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteMachineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
