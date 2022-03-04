import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isLoading = false;
  form: FormGroup
  constructor(public authService: AuthService) {
    this.form = new FormGroup({
      name: new FormControl ('', {validators : [Validators.required]}),
      email: new FormControl('', { validators: [Validators.required]}),
      type: new FormControl('', {validators:[Validators.required]}),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }
 
  ngOnInit(): void {
  }
  get myForm() {
    return this.form.controls
  }

  onSignup() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(this.form.value.name,this.form.value.email,this.form.value.type, this.form.value.password);
    alert("Data Added Successfully");
    

  }
}
