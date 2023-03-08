import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {CoursesStateFacade} from "../../../../store/courses/courses.facade";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit{
  course$ = this.coursesStoreService.course$;

  constructor(
    private route: ActivatedRoute,
    private coursesStoreService: CoursesStateFacade,
    private location: Location
  ) {}

  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');
    if(cardId) {
      this.coursesStoreService.getSingleCourse(cardId);
    }
  }

  goBack(){
    this.location.back();
  }


}
