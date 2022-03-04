import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsService } from 'src/app/Services/doctors.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
public Doctors:any

  constructor( private route: Router,
    private DoctorInfo: DoctorsService) { }

  ngOnInit(): void {
    this.DoctorInfo.getDoctorDetails().subscribe(data =>this.Doctors = data)
  }

}
