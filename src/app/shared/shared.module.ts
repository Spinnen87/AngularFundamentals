import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  CourseFormComponent,
  ModalComponent
} from "./components";
import { CustomEmailValidatorDirective } from './directives/custom-email-validator.directive';
import { DurationPipe } from './pipes/duration.pipe';

const components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  CourseFormComponent,
  ModalComponent
];

@NgModule({
  declarations: [components, CustomEmailValidatorDirective, DurationPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [components, CustomEmailValidatorDirective, DurationPipe]
})
export class SharedModule { }
