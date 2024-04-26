import { TestBed } from '@angular/core/testing';

import { ColaborationApiService } from './colaboration-api.service';

describe('ColaborationApiService', () => {
  let service: ColaborationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaborationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
