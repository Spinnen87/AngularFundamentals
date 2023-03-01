import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {UserApiResult} from "../../../models/user";
import {SessionStorageService} from "../../../auth/services/session-storage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) { }

  getUser(){
    const authorization = this.sessionStorageService.getToken();
    const headers = new HttpHeaders()
      .set('authorization', `Bearer ${authorization}`);

     return  this.http.get<UserApiResult>(`${environment.apiURL}/users/me`, {headers});
  }
}
