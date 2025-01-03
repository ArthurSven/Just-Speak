import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanHomeComponent } from './german-home.component';

describe('GermanHomeComponent', () => {
  let component: GermanHomeComponent;
  let fixture: ComponentFixture<GermanHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
