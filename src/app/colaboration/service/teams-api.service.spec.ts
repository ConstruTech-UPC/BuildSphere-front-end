import { TestBed } from '@angular/core/testing';

import { TeamsService } from './teams-api.service';

describe('TeamsApiService', () => {
  let service: TeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
