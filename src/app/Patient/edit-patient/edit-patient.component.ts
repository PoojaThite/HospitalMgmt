import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  patientData: Patient[] =[];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) {
    this.editForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      gender: new FormControl('',Validators.required),
      age: new FormControl('', Validators.required),
      bloodgroup : new FormControl('',Validators.required),
      number : new FormControl('',Validators.required),
      diease : new FormControl('',Validators.required),
      concernDoctor : new FormControl('',Validators.required),
      addmissionDate : new FormControl('',Validators.required),
      dischargeDate : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
    this.updatePatient();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getPatient(id);


  }

  // Choose options with select-dropdown
  updateProfile(e: any) {
    var element = e.target as HTMLSelectElement
    this.editForm?.get('name')?.setValue(element.value, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get f() {
    return this.editForm.controls;
  }

  getPatient(id: any) {
    this.patientService.getPatient(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        gender: data['gender'],
        age: data['age'],
        number:data['number'],
        bloodgroup: data['bloodgroup'],
        diease:data['diease'],
        concernDoctor:data['concernDoctor'],
        addmissionDate:data['addmissionDate'],
        dischargeDate:data['dischargeDate'],
        address:data['address']
      });
    });
  }

  updatePatient() {
    this.editForm = this.fb.group({
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

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.patientService.updatePatient(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('admin/listpatient');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
      return true;
    }
  }


}
