import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDeClientesComponent } from './gestao-de-clientes.component';

describe('GestaoDeClientesComponent', () => {
  let component: GestaoDeClientesComponent;
  let fixture: ComponentFixture<GestaoDeClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoDeClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
