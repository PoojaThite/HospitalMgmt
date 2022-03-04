import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookedAppointmentComponent } from './list-booked-appointment.component';

describe('ListBookedAppointmentComponent', () => {
  let component: ListBookedAppointmentComponent;
  let fixture: ComponentFixture<ListBookedAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookedAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
