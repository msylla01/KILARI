import { TestBed } from '@angular/core/testing';

import { RaiService } from './rai.service';

describe('RaiService', () => {
  let service: RaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
