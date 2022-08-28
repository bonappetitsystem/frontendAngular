import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarReceitasComponent } from './adicionar-receitas.component';

describe('AdicionarReceitasComponent', () => {
  let component: AdicionarReceitasComponent;
  let fixture: ComponentFixture<AdicionarReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
