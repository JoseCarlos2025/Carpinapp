import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  nameValid: boolean = true;
  passwordValid: boolean = true;
  emailValid: boolean = true;

  constructor(private router: Router) {

  }

  validateName() {
    this.nameValid = this.username.length >= 3;
    console.log(this.nameValid);
  }

  validatePassword() {
    this.passwordValid = this.password.length >= 8;
  }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.emailValid = emailPattern.test(this.email);
  }

  onSubmit() {
    if (this.nameValid && this.passwordValid && this.emailValid) {
      this.router.navigate(['/market']);
    } else {
      
    }
  }
  
}
