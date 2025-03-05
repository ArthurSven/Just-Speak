import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermannumbersComponent } from './germannumbers.component';

describe('GermannumbersComponent', () => {
  let component: GermannumbersComponent;
  let fixture: ComponentFixture<GermannumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermannumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermannumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
