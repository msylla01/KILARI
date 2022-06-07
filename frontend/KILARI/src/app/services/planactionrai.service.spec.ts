import { TestBed } from '@angular/core/testing';

import { PlanactionraiService } from './planactionrai.service';

describe('PlanactionraiService', () => {
  let service: PlanactionraiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanactionraiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
