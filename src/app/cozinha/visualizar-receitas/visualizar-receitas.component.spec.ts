import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarReceitasComponent } from './visualizar-receitas.component';

describe('VisualizarReceitasComponent', () => {
  let component: VisualizarReceitasComponent;
  let fixture: ComponentFixture<VisualizarReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
