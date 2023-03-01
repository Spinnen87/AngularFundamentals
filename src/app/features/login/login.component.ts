import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../auth/services/auth/auth.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userEmail: string = '';
  userPassword: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  onFormSubmit(form: NgForm){
    this.auth.login(form.value).subscribe(() => {
      this.router.navigate([this.auth.getRedirectUrl()])
    });
  }


}
