import {Component, OnInit} from '@angular/core';
import {CoursesStoreService} from "../../services/courses-store/courses-store.service";
import {UserStoreService} from "../../user/services/user-store/user-store.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  courses = this.coursesStoreService.courses$;
  isAdmin: boolean = false;

  constructor(
    private coursesStoreService: CoursesStoreService,
    private userStoreService: UserStoreService
  ) {}

  ngOnInit() {
    this.userStoreService.isAdmin$.subscribe((res) => {
      this.isAdmin = res;
    })
    this.coursesStoreService.getAll().subscribe()
  }

  deleteItem(id: string) {
    this.coursesStoreService.deleteCourse(id).subscribe();
  }

}
