import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrofuncionarioComponent } from './cadastrofuncionario.component';

describe('CadastrofuncionarioComponent', () => {
  let component: CadastrofuncionarioComponent;
  let fixture: ComponentFixture<CadastrofuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrofuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrofuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
