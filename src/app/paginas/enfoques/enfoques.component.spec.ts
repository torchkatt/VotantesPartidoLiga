import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfoquesComponent } from './enfoques.component';

describe('EnfoquesComponent', () => {
  let component: EnfoquesComponent;
  let fixture: ComponentFixture<EnfoquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnfoquesComponent]
    });
    fixture = TestBed.createComponent(EnfoquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
