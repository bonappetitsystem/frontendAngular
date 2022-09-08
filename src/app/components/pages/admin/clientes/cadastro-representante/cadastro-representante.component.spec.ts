import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRepresentanteComponent } from './cadastro-representante.component';

describe('CadastroRepresentanteComponent', () => {
  let component: CadastroRepresentanteComponent;
  let fixture: ComponentFixture<CadastroRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroRepresentanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
