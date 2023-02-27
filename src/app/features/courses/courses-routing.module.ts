import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {AddCourseComponent} from "./components/add-course/add-course.component";
import {CourseComponent} from "./components/course/course.component";
import {CourseFormComponent} from "../../shared/components";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: 'add',
        component: AddCourseComponent,
      },
      {
        path: ':id',
        component: CourseComponent
      },
      {
        path: 'edit/:id',
        component: CourseFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
