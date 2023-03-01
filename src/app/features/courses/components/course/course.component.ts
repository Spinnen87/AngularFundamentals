import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {CoursesStoreService} from "../../../../services/courses-store/courses-store.service";
import {Course} from "../../../../models/courses-api-results";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit{
  course: Course | null = null;

  constructor(
    private route: ActivatedRoute,
    private coursesStoreService: CoursesStoreService,
    private location: Location
  ) {}

  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');
    if(cardId) {
      this.coursesStoreService.getCourse(cardId).subscribe(data => {
        this.course = data.result;
      });
    }
  }

  goBack(){
    this.location.back();
  }


}
