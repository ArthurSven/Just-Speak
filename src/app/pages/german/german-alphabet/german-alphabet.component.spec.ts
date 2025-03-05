import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanAlphabetComponent } from './german-alphabet.component';

describe('GermanAlphabetComponent', () => {
  let component: GermanAlphabetComponent;
  let fixture: ComponentFixture<GermanAlphabetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanAlphabetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
