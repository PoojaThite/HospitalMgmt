import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/auth.service';
import { Appointment } from 'src/app/model/appointment';
import { BookAppointmentService } from 'src/app/Services/book-appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  public successMsg: string='';
  public errorMsg: string ='';
  appointmentDate: string ='';
  name: string ='';
  email: string ='';
 
  Appointment : Appointment[] = [];
  constructor(private appointmentService: BookAppointmentService,
    private authServices : AuthService) { }
userId:any;
  ngOnInit() {
this.authServices.authUserIdListenerObervable.subscribe(id =>{
this.userId = id;
})

  }

  createAppointment() {
    this.successMsg = '';
    this.errorMsg = '';
    this.appointmentService.createAppointment(this.appointmentDate, this.name, this.email, this.userId)
      .subscribe((createdAppointment: Appointment) => {
        this.appointmentDate = '';
        this.name = '';
        this.email = '';
        const appointmentDate = new Date(createdAppointment.appointmentDate).toDateString();
        this.successMsg = `Appointment Booked Successfully for ${appointmentDate}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

}
