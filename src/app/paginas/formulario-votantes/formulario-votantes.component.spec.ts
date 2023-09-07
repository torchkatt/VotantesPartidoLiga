import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioVotantesComponent } from './formulario-votantes.component';

describe('FormularioVotantesComponent', () => {
  let component: FormularioVotantesComponent;
  let fixture: ComponentFixture<FormularioVotantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioVotantesComponent]
    });
    fixture = TestBed.createComponent(FormularioVotantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
