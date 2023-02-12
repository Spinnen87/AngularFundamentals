import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Card} from "../../../models/card";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements   OnChanges{
  @Input() card!: Card;
  @Input() editable: boolean = false;
  duration: string = '';

  ngOnChanges(changes:SimpleChanges):void{
    const {card: {currentValue, previousValue}} = changes;
    if (currentValue?.duration !== previousValue?.duration) {
      const h = Math.floor(this.card.duration / 60);
      const m = this.card.duration - (60 * h);
      this.duration =  `${h < 10 ? '0'+h : h}:${m < 10 ? '0'+m : m}`;
    }
  }
}
