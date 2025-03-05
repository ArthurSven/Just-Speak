import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanpronounsComponent } from './germanpronouns.component';

describe('GermanpronounsComponent', () => {
  let component: GermanpronounsComponent;
  let fixture: ComponentFixture<GermanpronounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanpronounsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanpronounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
