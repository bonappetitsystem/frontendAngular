import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucaoReceitaComponent } from './execucao-receita.component';

describe('ExecucaoReceitaComponent', () => {
  let component: ExecucaoReceitaComponent;
  let fixture: ComponentFixture<ExecucaoReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecucaoReceitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecucaoReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
