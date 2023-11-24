import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplarComponent } from './exemplar.component';

describe('ExemplarComponent', () => {
  let component: ExemplarComponent;
  let fixture: ComponentFixture<ExemplarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemplarComponent]
    });
    fixture = TestBed.createComponent(ExemplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
