import { TestBed } from '@angular/core/testing';

import { HealthUnitService } from './health-unit.service';

describe('HealthUnitService', () => {
  let service: HealthUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
