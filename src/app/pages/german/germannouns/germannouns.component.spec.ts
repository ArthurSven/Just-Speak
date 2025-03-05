import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermannounsComponent } from './germannouns.component';

describe('GermannounsComponent', () => {
  let component: GermannounsComponent;
  let fixture: ComponentFixture<GermannounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermannounsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermannounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
