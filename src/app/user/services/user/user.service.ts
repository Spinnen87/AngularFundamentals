import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {UserApiResult} from "../../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(){
     return  this.http.get<UserApiResult>(`${environment.apiURL}/users/me`);
  }
}
