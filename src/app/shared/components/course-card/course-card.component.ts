import {Component, Input} from '@angular/core';
import {Course} from "../../../models/courses-api-results";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent{
  @Input() card!: Course;
  @Input() editable: boolean = false;

  constructor(private router: Router) {
  }

  goToCoursePage(){
    this.router.navigate([`/courses/${this.card.id}`])
  }
}
