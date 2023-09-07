import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotanteComponent } from './votante.component';

describe('VotanteComponent', () => {
  let component: VotanteComponent;
  let fixture: ComponentFixture<VotanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotanteComponent]
    });
    fixture = TestBed.createComponent(VotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
