import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { reclamationComponent } from './reclamation.component';

describe('reclamationComponent', () => {
  let component: reclamationComponent;
  let fixture: ComponentFixture<reclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [reclamationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(reclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
