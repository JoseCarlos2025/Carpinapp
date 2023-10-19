import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  nameValid: boolean = true;
  passwordValid: boolean = true;

  constructor(private router: Router) {

  }

  validateName() {
    this.nameValid = this.username.length >= 3;
  }

  validatePassword() {
    this.passwordValid = this.password.length >= 8;
  }

  onSubmit() {
    if (this.nameValid && this.passwordValid) {
      this.router.navigate(['/market']);
    } else {
      
    }
  }
}
