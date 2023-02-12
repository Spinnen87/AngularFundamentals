import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoursesModuleModule} from "./courses-module/courses-module.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
