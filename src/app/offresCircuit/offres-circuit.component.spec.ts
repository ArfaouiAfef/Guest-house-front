import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresCircuitComponent } from './offres-circuit.component';

describe('OffresCircuitComponent', () => {
  let component: OffresCircuitComponent;
  let fixture: ComponentFixture<OffresCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresCircuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
