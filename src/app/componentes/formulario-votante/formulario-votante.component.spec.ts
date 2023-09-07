import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioVotanteComponent } from './formulario-votante.component';

describe('FormularioVotanteComponent', () => {
  let component: FormularioVotanteComponent;
  let fixture: ComponentFixture<FormularioVotanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioVotanteComponent]
    });
    fixture = TestBed.createComponent(FormularioVotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
