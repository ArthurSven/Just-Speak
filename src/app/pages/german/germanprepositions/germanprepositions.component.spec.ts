import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanprepositionsComponent } from './germanprepositions.component';

describe('GermanprepositionsComponent', () => {
  let component: GermanprepositionsComponent;
  let fixture: ComponentFixture<GermanprepositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanprepositionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanprepositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
