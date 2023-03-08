import {Component, OnInit} from '@angular/core';
import {UserStoreService} from "../../user/services/user-store/user-store.service";
import {CoursesStateFacade} from "../../store/courses/courses.facade";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  courses$ = this.courseStateService.allCourses$;
  isAdmin: boolean = false;
  isShowConfirmModal = false;
  deletedId: string | null = null;

  constructor(
    private courseStateService: CoursesStateFacade,
    private userStoreService: UserStoreService
  ) {}

  ngOnInit() {
    this.userStoreService.isAdmin$.subscribe((res) => {
      this.isAdmin = res;
    })
    this.courseStateService.getAllCourses();
  }

  deleteItem(id: string) {
    this.isShowConfirmModal = true;
    this.deletedId = id;
  }

  confirmedDelete(confirm: boolean){
    if(confirm && this.deletedId){
      this.courseStateService.deleteCourse(this.deletedId);
    }
    this.deletedId = null;
  }

}
