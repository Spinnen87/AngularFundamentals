import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import {LoginComponent} from "./login.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ]
})
export class LoginModule { }
