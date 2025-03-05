import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermansentencesComponent } from './germansentences.component';

describe('GermansentencesComponent', () => {
  let component: GermansentencesComponent;
  let fixture: ComponentFixture<GermansentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermansentencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermansentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
