import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndemnisationComponent } from './indemnisation.component';




describe('IndemnisationComponent', () => {
  let component: IndemnisationComponent;
  let fixture: ComponentFixture<IndemnisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndemnisationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndemnisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
