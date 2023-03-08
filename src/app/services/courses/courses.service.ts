import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Course, CourseApiResult, CoursesApiResults, CreateCourse} from "../../models/courses-api-results";
import {ApiResult} from "../../models/apiResult";
import {SessionStorageService} from "../../auth/services/session-storage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) { }

  getAll() {
    return this.http.get<CoursesApiResults>(`${environment.apiURL}/courses/all`);
  }

  createCourse(course: CreateCourse){
    return this.http.post<CourseApiResult>(`${environment.apiURL}/courses/add`, course);
  }

  getCourse(id: string){
    return this.http.get<CourseApiResult>(`${environment.apiURL}/courses/${id}`);
  }

  editCourse(id: string, course: Course){
    return this.http.put<CourseApiResult>(`${environment.apiURL}/courses/${id}`, course);
  }

  deleteCourse(id: string){
    const authorization = this.sessionStorageService.getToken();

    const headers = new HttpHeaders()
      .set('authorization', `Bearer ${authorization}`);
    return this.http.delete<ApiResult<string>>(`${environment.apiURL}/courses/${id}`, {headers});
  }

}
