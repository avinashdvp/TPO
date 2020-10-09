import { TestBed } from '@angular/core/testing';

import { ForcastServiceService } from './forcast-service.service';

describe('ForcastServiceService', () => {
  let service: ForcastServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForcastServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
