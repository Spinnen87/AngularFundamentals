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
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./auth/interceptors/token.interceptor";
import {CoursesService} from "./services/courses/courses.service";
import {UserModule} from "./user/user.module";
import { StoreModule } from '@ngrx/store';
import {effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';

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
      AuthModule,
      UserModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot(effects),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      }),
  ],
  providers: [
    AuthorizedGuard,
    NotAuthorizedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    CoursesService,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
