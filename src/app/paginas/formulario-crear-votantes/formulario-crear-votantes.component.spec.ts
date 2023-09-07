import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearVotantesComponent } from './formulario-crear-votantes.component';

describe('FormularioCrearVotantesComponent', () => {
  let component: FormularioCrearVotantesComponent;
  let fixture: ComponentFixture<FormularioCrearVotantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCrearVotantesComponent]
    });
    fixture = TestBed.createComponent(FormularioCrearVotantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
