import {Component, Input} from '@angular/core';
import {Card} from "../../../models/card";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent{
  @Input() card!: Card;
  @Input() editable: boolean = false;
}
