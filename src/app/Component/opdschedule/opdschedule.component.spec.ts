import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDScheduleComponent } from './opdschedule.component';

describe('OPDScheduleComponent', () => {
  let component: OPDScheduleComponent;
  let fixture: ComponentFixture<OPDScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPDScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
