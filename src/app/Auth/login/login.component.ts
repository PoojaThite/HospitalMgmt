import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(public authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl('', { validators: [Validators.required]}),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }
  ngOnInit(): void {
  }
 
  get myForm() {
    return this.form.controls
  }
  onLogin() {
    // alert("login ....");
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(this.form.value.email, this.form.value.password);
  }

}
