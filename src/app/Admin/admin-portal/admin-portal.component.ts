import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  
  }


  addPatient(){
    this.router.navigate(['addpatient'], {relativeTo:this.route});
  }

  viewPatient(){
    this.router.navigate(['listpatient'], {relativeTo:this.route});

  }
  addMedicine(){
    this.router.navigate(['addmedicine'], {relativeTo:this.route});

  }

  viewMedicine(){
    this.router.navigate(['listmedicine'], {relativeTo:this.route});

  }

  addRoom(){
    this.router.navigate(['addroom'], {relativeTo:this.route});

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

  ShowTicket(){
    this.router.navigate(['listticket'], {relativeTo:this.route});

  }
}
