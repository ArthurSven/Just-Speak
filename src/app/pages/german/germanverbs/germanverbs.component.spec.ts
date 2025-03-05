import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanverbsComponent } from './germanverbs.component';

describe('GermanverbsComponent', () => {
  let component: GermanverbsComponent;
  let fixture: ComponentFixture<GermanverbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanverbsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanverbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
