import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { indemnisationComponent } from './indemnisation.component';






describe('indemnisationComponent', () => {
  let component: indemnisationComponent;
  let fixture: ComponentFixture<indemnisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [indemnisationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(indemnisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
