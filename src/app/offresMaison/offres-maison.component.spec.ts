import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresMaisonComponent } from './offres-maison.component';

describe('OffresMaisonComponent', () => {
  let component: OffresMaisonComponent;
  let fixture: ComponentFixture<OffresMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresMaisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
