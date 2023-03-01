import {Component, OnInit} from '@angular/core';
import {CoursesStoreService} from "../../services/courses-store/courses-store.service";
import {Course} from "../../models/courses-api-results";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  courses: Course[] | [] = [];

  constructor(
    private coursesStoreService: CoursesStoreService
  ) {}

  ngOnInit() {
    this.coursesStoreService.getAll().subscribe((res) => {
      this.courses = res.result;
    })
  }

  deleteItem(id: string) {
  }

}
