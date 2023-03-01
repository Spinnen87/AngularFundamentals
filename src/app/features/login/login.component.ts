import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../auth/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userEmail: string = '';
  userPassword: string = '';

  constructor(private auth: AuthService) {
  }

  onFormSubmit(form: NgForm){
    this.auth.login(form.value).subscribe(() => {
      console.log('User is logged in')
    });
  }


}
