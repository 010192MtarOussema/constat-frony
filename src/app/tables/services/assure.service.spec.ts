import { TestBed } from '@angular/core/testing';
import { AssureService } from './assure.service';




describe('AssureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service:AssureService = TestBed.get(AssureService);
    expect(service).toBeTruthy();
  });
});
