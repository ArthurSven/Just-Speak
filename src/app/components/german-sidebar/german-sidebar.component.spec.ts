import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanSidebarComponent } from './german-sidebar.component';

describe('GermanSidebarComponent', () => {
  let component: GermanSidebarComponent;
  let fixture: ComponentFixture<GermanSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
