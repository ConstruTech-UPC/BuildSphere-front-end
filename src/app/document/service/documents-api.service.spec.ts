import { TestBed } from '@angular/core/testing';
import { DocumentsApiService } from './documents-api.service';

describe('DocumentsApiServiceService', () => {
  let service: DocumentsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
