import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../../../../models/courses-api-results";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input() courses: Course[] | null = null;
  @Input() editable: boolean = false;
  @Output() deleteCourse = new EventEmitter<string>()

  onDelete(id: string) {
    this.deleteCourse.emit(id);
  }

}
