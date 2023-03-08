import { Component } from '@angular/core';
import {CreateCourse} from "../../../../models/courses-api-results";
import {CoursesStateFacade} from "../../../../store/courses/courses.facade";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  constructor(
    private courseStateService: CoursesStateFacade
  ) {}

  createCourse(course: CreateCourse){
    this.courseStateService.createCourse({
      ...course,
      authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36']
    })
  }

}
