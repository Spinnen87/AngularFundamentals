import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import {CoursesComponent} from "./courses.component";
import {CourseListComponent} from "./components/course-list/course-list.component";
import { AddCourseComponent } from './components/add-course/add-course.component';
import {SharedModule} from "../../shared/shared.module";
import {CourseComponent} from "./components/course/course.component";


@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent,
    AddCourseComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
