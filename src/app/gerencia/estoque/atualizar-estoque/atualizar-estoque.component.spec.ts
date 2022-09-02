import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEstoqueComponent } from './atualizar-estoque.component';

describe('AtualizarEstoqueComponent', () => {
  let component: AtualizarEstoqueComponent;
  let fixture: ComponentFixture<AtualizarEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarEstoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
