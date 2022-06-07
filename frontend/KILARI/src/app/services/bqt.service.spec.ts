import { TestBed } from '@angular/core/testing';

import { BqtService } from './bqt.service';

describe('BqtService', () => {
  let service: BqtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BqtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
