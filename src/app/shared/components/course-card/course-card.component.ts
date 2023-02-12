import {Component, Input} from '@angular/core';
import {Card} from "../../../models/card";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() card!: Card;
  @Input() editable: boolean = false;

  get duration() {
    const h = Math.floor(this.card.duration / 60);
    const m = this.card.duration - (60 * h);
    return `${h < 10 ? '0'+h : h}:${m < 10 ? '0'+m : m}`;
  }
}
