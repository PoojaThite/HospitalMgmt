import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { PatientService } from 'src/app/Services/patient.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  submitted = false;
  PatientForm: FormGroup;
  
  constructor(
    private ngZone : NgZone,
    private router: Router,
    private patientServices: PatientService
  ) { 
    this.PatientForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      gender: new FormControl('',Validators.required),
      age: new FormControl('', Validators.required),
      bloodgroup : new FormControl('',Validators.required),
      number : new FormControl('',Validators.required),
      diease : new FormControl('',Validators.required),
      concernDoctor : new FormControl('',Validators.required),
      addmissionDate : new FormControl('',Validators.required),
      dischargeDate : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
    })
  }

  ngOnInit() { }

  // Choose designation with select dropdown


  // Getter to access form control
  get f(){
    return this.PatientForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.PatientForm.valid) {
      return false;
    } else {
      this.patientServices.createPatient(this.PatientForm.value).subscribe(
        (res) => {
          console.log('Patient successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('admin/listpatient'))
        }, (error) => {
          console.log(error);
        });
      return true;
    }
  }

}
