import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  
  Patient:any = [];
  public columns = ['name', 'gender', 'age', 'bloodgroup','number','diease', 'concernDoctor', 'addmissionDate', 'addmissionDate', 'dischargeDate', 'address'];

  constructor(private patientService: PatientService) { 
    this.readPatient();
  }

  ngOnInit() {}

  readPatient(){
    this.patientService.getPatients().subscribe((data) => {
     this.Patient = data;
    })    
  }

  removePatient(patient: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.patientService.deletePatient(patient._id).subscribe((data) => {
          this.Patient.splice(index, 1);
        }
      )    
    }
  }

}
