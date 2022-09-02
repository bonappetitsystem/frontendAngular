import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCozinhaComponent } from './dashboard-cozinha.component';

describe('DashboardCozinhaComponent', () => {
  let component: DashboardCozinhaComponent;
  let fixture: ComponentFixture<DashboardCozinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCozinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
