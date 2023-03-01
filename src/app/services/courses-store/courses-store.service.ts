import { Injectable } from '@angular/core';
import {CoursesService} from "../courses/courses.service";
import {BehaviorSubject} from "rxjs";
import {Course, CreateCourse} from "../../auth/models/courses-api-results";

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private courses$$ = new BehaviorSubject([] as Course[]);
  public courses$ = this.courses$$.asObservable();

  private isLoading$$ = new BehaviorSubject(false);
  public isLoading$ = this.isLoading$$.asObservable();

  constructor(private coursesService: CoursesService) { }


  getAll(){
    if(!this.isLoading$$.getValue()){
      this.isLoading$$.next(true);
    }

    this.coursesService.getAll().subscribe(data => {
      if(data.successful){
        this.courses$$.next(data.result);
      }
      this.isLoading$$.next(false);
    });
  }

  createCourse(course: CreateCourse){
    this.isLoading$$.next(true);
    this.coursesService.createCourse(course).subscribe(data => {
      if(data.successful){
        this.getAll();
      }
    });
  }

  getCourse(id: string){
    this.isLoading$$.next(true);
    this.coursesService.getCourse(id).subscribe(data => {
      if(data.successful){
        console.log('course data ', data.result)
      }
      this.isLoading$$.next(false);
    })
  }

  editCourse(id: string, course: Course){
    this.isLoading$$.next(true);
    this.coursesService.editCourse(id, course).subscribe(data => {
      if(data.successful){
        this.getAll();
      }
    });
  }


  deleteCourse(id: string){
    this.isLoading$$.next(true);
    this.coursesService.deleteCourse(id).subscribe(data => {
      if(data.successful){
        this.getAll();
      }
    });
  }
}
