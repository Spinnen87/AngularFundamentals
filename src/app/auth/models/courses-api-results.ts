import {ApiResult} from "./apiResult";

export interface Course {
  id:string;
  title: string;
  description: string;
  creationDate: string;
  duration: number,
  authors: string[],
}

export interface CoursesApiResults extends ApiResult<Course[]>{}

export interface CourseApiResult extends ApiResult<Course>{}

export interface CreateCourse extends Omit<Course, 'id'>{}
