import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanalphabetComponent } from './germanalphabet.component';

describe('GermanalphabetComponent', () => {
  let component: GermanalphabetComponent;
  let fixture: ComponentFixture<GermanalphabetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanalphabetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanalphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
