import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userEmail: string = '';
  userPassword: string = '';

  onFormSubmit(form: NgForm){
      console.log('formData', JSON.stringify(form.value, null, 2))
  }


}
