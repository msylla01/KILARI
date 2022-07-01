/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestInterceptorService } from './rest-interceptor.service';

describe('Service: RestInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestInterceptorService]
    });
  });

  it('should ...', inject([RestInterceptorService], (service: RestInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
