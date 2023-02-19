import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator} from "../../shared/utils/email-validator.directive";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      userName: ["", [
        Validators.required,
        Validators.minLength(6)
      ]],
      email: ["", [
        Validators.required,
        emailValidator()
      ]],
      password: ["", Validators.required],
    });
  }

  get userName() {
    return this.form.get("userName");
  }

  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }

  onFormSubmit() {
    this.form.markAllAsTouched()
    console.log(JSON.stringify(this.form.value, null, 2));
  }
}
