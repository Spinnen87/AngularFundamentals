import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Course, CourseApiResult, CoursesApiResults} from "../../auth/models/courses-api-results";
import {ApiResult} from "../../auth/models/apiResult";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CoursesApiResults>(`${environment.apiURL}/courses/all`);
  }

  createCourse(course: Omit<Course, 'id'>){
    return this.http.post<CourseApiResult>(`${environment.apiURL}/courses/add`, course);
  }


  getCourse(id: string){
    return this.http.get<CourseApiResult>(`${environment.apiURL}/courses/${id}`);
  }


  editCourse(id: string, course: Course){
    return this.http.put<CourseApiResult>(`${environment.apiURL}/courses/${id}`, course);
  }

  deleteCourse(id: string){
    return this.http.delete<ApiResult<string>>(`${environment.apiURL}/courses/${id}`);
  }

}
