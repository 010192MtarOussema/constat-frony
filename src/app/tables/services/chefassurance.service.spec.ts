import { TestBed } from '@angular/core/testing';
import { ChefAssuranceService } from './chefassurance.service';



describe('ChefAssuranceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChefAssuranceService = TestBed.get(ChefAssuranceService);
    expect(service).toBeTruthy();
  });
});
