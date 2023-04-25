import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosMaisonComponent } from './nos-maison.component';

describe('NosMaisonComponent', () => {
  let component: NosMaisonComponent;
  let fixture: ComponentFixture<NosMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosMaisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
