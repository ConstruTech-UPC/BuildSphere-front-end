import { TestBed } from '@angular/core/testing';

import { TasksService } from './tasks-api.service';

describe('TasksApiService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
