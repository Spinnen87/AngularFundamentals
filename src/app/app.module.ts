import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SharedModule} from "./shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./auth/auth.module";
import {AuthorizedGuard} from "./auth/guards/authorized.guard";
import {NotAuthorizedGuard} from "./auth/guards/not-authorized.guard";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      BrowserModule,
      FontAwesomeModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      AuthModule
  ],
  providers: [
    AuthorizedGuard,
    NotAuthorizedGuard
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
