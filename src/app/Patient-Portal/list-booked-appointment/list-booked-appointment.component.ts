import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { BookAppointmentService } from 'src/app/Services/book-appointment.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-booked-appointment',
  templateUrl: './list-booked-appointment.component.html',
  styleUrls: ['./list-booked-appointment.component.css']
})
export class ListBookedAppointmentComponent implements OnInit {

  public loading = true;
  public errorMsg: string='';
  public successMsg: string='';
  appointments : Appointment[] = [];
  public columns = ['appointmentDate', 'name', 'email', 'cancel'];

  constructor(private appointmentService: BookAppointmentService) { }

  ngOnInit() {
    this.appointmentService.getAppointments()
      .subscribe((appointments: Appointment[]) => {
        this.appointments = appointments;
        this.loading = false;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
        this.loading = false;
      });
  }

  cancelAppointment(id: string) {
    this.appointmentService.cancelAppointment(id)
      .pipe(
        mergeMap(() => this.appointmentService.getAppointments())
      )
      .subscribe((appointments: Appointment[]) => {
        this.appointments = appointments;
        this.successMsg = 'Successfully cancelled appointment';
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }


}
