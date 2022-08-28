import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAndamentoComponent } from './pedidos-andamento.component';

describe('PedidosAndamentoComponent', () => {
  let component: PedidosAndamentoComponent;
  let fixture: ComponentFixture<PedidosAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
