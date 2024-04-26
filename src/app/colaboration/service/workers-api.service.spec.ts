import { TestBed } from '@angular/core/testing';

import { WorkersService } from './workers-api.service';

describe('WorkersApiService', () => {
  let service: WorkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
