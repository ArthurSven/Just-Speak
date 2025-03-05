import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermancasesComponent } from './germancases.component';

describe('GermancasesComponent', () => {
  let component: GermancasesComponent;
  let fixture: ComponentFixture<GermancasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermancasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermancasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
