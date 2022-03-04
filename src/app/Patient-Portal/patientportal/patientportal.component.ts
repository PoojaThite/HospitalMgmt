import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patientportal',
  templateUrl: './patientportal.component.html',
  styleUrls: ['./patientportal.component.css']
})
export class PatientportalComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  }
  viewMedicine(){
    this.router.navigate(['listmedicine'], {relativeTo:this.route});

  }
  viewRoom(){
    this.router.navigate(['listroom'], {relativeTo:this.route});

  }

  bookAppointment(){
    this.router.navigate(['appointment'], {relativeTo:this.route});

  }
  CancelAppointment(){
    this.router.navigate(['listappointment'], {relativeTo:this.route});

  }

  addTicket(){
    this.router.navigate(['appticket'], {relativeTo:this.route});

  }
}
