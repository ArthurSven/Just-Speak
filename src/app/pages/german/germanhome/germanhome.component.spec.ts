import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanhomeComponent } from './germanhome.component';

describe('GermanhomeComponent', () => {
  let component: GermanhomeComponent;
  let fixture: ComponentFixture<GermanhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
