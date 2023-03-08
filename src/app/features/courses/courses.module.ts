import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import {CoursesComponent} from "./courses.component";
import {CourseListComponent} from "./components/course-list/course-list.component";
import { AddCourseComponent } from './components/add-course/add-course.component';
import {SharedModule} from "../../shared/shared.module";
import {CourseComponent} from "./components/course/course.component";
import { StoreModule } from '@ngrx/store';
import {coursesFeatureKey, coursesFeatureReducer} from "../../store/courses/courses.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CoursesEffects} from "../../store/courses/courses.effects";
import {CoursesStateFacade} from "../../store/courses/courses.facade";


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
    SharedModule,
    StoreModule.forFeature(
      coursesFeatureKey,
      coursesFeatureReducer
    ),
    EffectsModule.forFeature([CoursesEffects])
  ],
  providers: [
    CoursesStateFacade
  ]
})
export class CoursesModule { }
