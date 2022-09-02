import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoEstoqueComponent } from './movimentacao-estoque.component';

describe('MovimentacaoEstoqueComponent', () => {
  let component: MovimentacaoEstoqueComponent;
  let fixture: ComponentFixture<MovimentacaoEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoEstoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentacaoEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
