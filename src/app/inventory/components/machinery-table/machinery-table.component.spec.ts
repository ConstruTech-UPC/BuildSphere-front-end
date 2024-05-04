import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryTableComponent } from './machinery-table.component';

describe('MachineryTableComponent', () => {
  let component: MachineryTableComponent;
  let fixture: ComponentFixture<MachineryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachineryTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MachineryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
