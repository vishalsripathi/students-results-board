import { TestBed } from '@angular/core/testing';

import { AdmissionformService } from './admissionform.service';

describe('AdmissionformService', () => {
  let service: AdmissionformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
