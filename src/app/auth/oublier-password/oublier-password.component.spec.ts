import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OublierPasswordComponent } from './oublier-password.component';

describe('OublierPasswordComponent', () => {
  let component: OublierPasswordComponent;
  let fixture: ComponentFixture<OublierPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OublierPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OublierPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
