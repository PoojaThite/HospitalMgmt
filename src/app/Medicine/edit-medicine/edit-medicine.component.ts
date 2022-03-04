import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Medicine } from 'src/app/model/medicine';
import { ActivatedRoute, Router } from "@angular/router";
import { MedicineService } from 'src/app/Services/medicine.service';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit {

  submitted = false;
  editMedicineForm: FormGroup;
  patientData: Medicine[] =[];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private medicineService: MedicineService,
    private router: Router
  ) {
    this.editMedicineForm = new FormGroup({
      medicineName : new FormControl('',Validators.required),
      quantity :  new FormControl('',Validators.required),
      price : new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {

    this.updateMedicine();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getMedicine(id);
  }
  get f() {
    return this.editMedicineForm.controls;
  }

  getMedicine(id: any) {
    this.medicineService.getMedicine(id).subscribe(data => {
      this.editMedicineForm.setValue({
        medicineName: data['medicineName'],
        quantity: data['quantity'],
        price: data['price'],
      });
    });
  }

  updateMedicine() {
    this.editMedicineForm = this.fb.group({
      medicineName: new FormControl('',Validators.required),
      quantity: new FormControl('',Validators.required),
      price: new FormControl('', Validators.required),
     
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editMedicineForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.medicineService.updateMedicine(id, this.editMedicineForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('admin/listmedicine');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
      return true;
    }
  }
}
