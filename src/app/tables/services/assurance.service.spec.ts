import { TestBed } from '@angular/core/testing';
import { AssuranceService } from './assurance.service';




describe('AssuranceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service:AssuranceService = TestBed.get(AssuranceService);
    expect(service).toBeTruthy();
  });
});
