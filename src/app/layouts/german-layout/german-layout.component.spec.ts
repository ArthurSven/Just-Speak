import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanLayoutComponent } from './german-layout.component';

describe('GermanLayoutComponent', () => {
  let component: GermanLayoutComponent;
  let fixture: ComponentFixture<GermanLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
