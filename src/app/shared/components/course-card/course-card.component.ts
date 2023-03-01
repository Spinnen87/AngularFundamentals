import {Component, Input} from '@angular/core';
import {Course} from "../../../models/courses-api-results";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent{
  @Input() card!: Course;
  @Input() editable: boolean = false;
}
