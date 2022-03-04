import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from 'src/app/Services/medicine.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  submitted = false;
  medicineForm: FormGroup;

  constructor(private ngZone: NgZone,
    private router: Router,
    private medicineServices: MedicineService) {
    this.medicineForm = new FormGroup({
      medicineName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      quantity: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required, Validators.minLength(3)]),

    })

  }


 
  ngOnInit(): void {
  }

  get f(){
    return this.medicineForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.medicineForm.valid) {
      return false;
    } else {
      this.medicineServices.createMedicine(this.medicineForm.value).subscribe(
        (res) => {
          console.log('Medicine successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('admin/listmedicine'))
        }, (error) => {
          console.log(error);
        });
      return true;
    }
  }

}
