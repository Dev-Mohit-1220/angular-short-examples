import { TestBed } from '@angular/core/testing';

import { OfDataService } from './of-data.service';

describe('OfDataService', () => {
  let service: OfDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
