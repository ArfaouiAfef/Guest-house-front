import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurActivityComponent } from './our-activity.component';

describe('OurActivityComponent', () => {
  let component: OurActivityComponent;
  let fixture: ComponentFixture<OurActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
