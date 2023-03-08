import { createReducer, on } from "@ngrx/store";
import {
  requestAllCourses,
  requestAllCoursesFail,
  requestAllCoursesSuccess, requestCreateCourse, requestCreateCourseFail, requestCreateCourseSuccess,
  requestDeleteCourse,
  requestDeleteCourseFail,
  requestDeleteCourseSuccess,
  requestEditCourse,
  requestEditCourseFail,
  requestEditCourseSuccess,
  requestFilteredCourses,
  requestFilteredCoursesFail,
  requestFilteredCoursesSuccess,
  requestSingleCourse,
  requestSingleCourseFail,
  requestSingleCourseSuccess
} from "./courses.actions";
import {Course} from "../../models/courses-api-results";

export const coursesFeatureKey = 'courses'

export interface CoursesState {
  allCourses: Course[];
  course: Course;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}

const initialState: CoursesState = {
  allCourses: [],
  course: {} as Course,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: ''
}

export const coursesFeatureReducer = createReducer(initialState,
  on(requestAllCourses, (state) => ({ ...state })),
  on(requestAllCoursesSuccess, (state, {allCourses}) => ({ ...state, allCourses })),
  on(requestAllCoursesFail, (state) => ({ ...state })),
  on(requestSingleCourse, (state) => ({ ...state })),
  on(requestSingleCourseSuccess, (state, {course}) => ({ ...state, course })),
  on(requestSingleCourseFail, (state) => ({ ...state })),
  on(requestFilteredCourses, (state) => ({ ...state })),
  on(requestFilteredCoursesSuccess, (state) => ({ ...state })),
  on(requestFilteredCoursesFail, (state) => ({ ...state })),
  on(requestDeleteCourse, (state) => ({ ...state })),
  on(requestDeleteCourseSuccess, (state) => ({ ...state })),
  on(requestDeleteCourseFail, (state) => ({ ...state })),
  on(requestDeleteCourseFail, (state) => ({ ...state })),
  on(requestEditCourse, (state) => ({ ...state })),
  on(requestEditCourseSuccess, (state) => ({ ...state })),
  on(requestEditCourseFail, (state) => ({ ...state })),
  on(requestCreateCourse, (state) => ({ ...state })),
  on(requestCreateCourseSuccess, (state) => ({ ...state })),
  on(requestCreateCourseFail, (state) => ({ ...state })),
  )
