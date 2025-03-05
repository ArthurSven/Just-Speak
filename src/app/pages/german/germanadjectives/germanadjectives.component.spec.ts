import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanadjectivesComponent } from './germanadjectives.component';

describe('GermanadjectivesComponent', () => {
  let component: GermanadjectivesComponent;
  let fixture: ComponentFixture<GermanadjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanadjectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanadjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
