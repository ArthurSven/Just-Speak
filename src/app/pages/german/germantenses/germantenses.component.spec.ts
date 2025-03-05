import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermantensesComponent } from './germantenses.component';

describe('GermantensesComponent', () => {
  let component: GermantensesComponent;
  let fixture: ComponentFixture<GermantensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermantensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermantensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
