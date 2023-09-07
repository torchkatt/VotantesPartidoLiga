import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFullCrearVotanteComponent } from './form-full-crear-votante.component';

describe('FormFullCrearVotanteComponent', () => {
  let component: FormFullCrearVotanteComponent;
  let fixture: ComponentFixture<FormFullCrearVotanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFullCrearVotanteComponent]
    });
    fixture = TestBed.createComponent(FormFullCrearVotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
