import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/Services/medicine.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Auth/auth.service';
@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.css']
})
export class ListMedicineComponent implements OnInit {

  Medicine:any = [];
  userType:string =''
  userIsAuthenticated =false;
  private authStatusSub: Subscription = new Subscription;
  constructor(private medicineServices:MedicineService,
    private authService:AuthService) { }

  ngOnInit(): void {

  
    this.readMedicine();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
 this.userIsAuthenticated = isAuthenticated;

 this.authService.authTypeListenerObservable.subscribe(str =>{
  this.userType = str;
  console.log(this.userType)
});
    });
  }
  readMedicine(){
    this.medicineServices.getMedicines().subscribe((data) => {
     this.Medicine = data;
    })    
  }


  removeMedicine(medicine: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.medicineServices.deleteMedicine(medicine._id).subscribe((data) => {
          this.Medicine.splice(index, 1);
        }
      )    
    }
  }
}
