import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { emailValidator } from '../utils/email-validator.directive';

@Directive({
  selector: '[appCustomEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomEmailValidatorDirective,
    multi: true,
  }]
})
export class CustomEmailValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator()(control);
  }
}
