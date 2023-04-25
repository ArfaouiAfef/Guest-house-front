import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosCircuitComponent } from './nos-circuit.component';

describe('NosCircuitComponent', () => {
  let component: NosCircuitComponent;
  let fixture: ComponentFixture<NosCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosCircuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


