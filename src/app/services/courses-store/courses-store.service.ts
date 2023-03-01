import { Injectable } from '@angular/core';
import {CoursesService} from "../courses/courses.service";
import {BehaviorSubject, filter} from "rxjs";
import {switchMap, tap} from 'rxjs/operators';
import {Course, CreateCourse} from "../../models/courses-api-results";

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private courses$$ = new BehaviorSubject([] as Course[]);
  public courses$ = this.courses$$.asObservable();

  private isLoading$$ = new BehaviorSubject(false);
  public isLoading$ = this.isLoading$$.asObservable();

  constructor(private coursesService: CoursesService) { }

  private getAllCourses(){
    return this.coursesService.getAll().pipe(
      tap(
        data => {
          if(data.successful){
            this.courses$$.next(data.result);
          }
          this.isLoading$$.next(false);
        }
      )
    );
  }

  getAll(){
    this.isLoading$$.next(true);
    return  this.getAllCourses();
  }

  createCourse(course: CreateCourse){
    this.isLoading$$.next(true);
    return this.coursesService.createCourse(course).pipe(
      filter(data => data.successful),
      switchMap( () =>  this.getAllCourses())
    )
  }

  getCourse(id: string){
    this.isLoading$$.next(true);
    return this.coursesService.getCourse(id).pipe(tap(() => { this.isLoading$$.next(false) }));
  }

  editCourse(id: string, course: Course){
    this.isLoading$$.next(true);
    return this.coursesService.editCourse(id, course).pipe(
      filter(data => data.successful),
      switchMap( () =>  this.getAllCourses())
    )
  }


  deleteCourse(id: string){
    this.isLoading$$.next(true);
    return this.coursesService.deleteCourse(id).pipe(
      filter(data => data.successful),
      switchMap( () =>  this.getAllCourses())
    );
  }
}
