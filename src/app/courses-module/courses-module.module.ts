import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { CoursesComponent } from '../features/courses/courses.component';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModuleModule { }
