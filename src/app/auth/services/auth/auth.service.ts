import { Injectable } from '@angular/core';
import {BehaviorSubject, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {SessionStorageService} from "../session-storage/session-storage.service";
import { User } from '../../models/user';
import {LoginResult, RegisterResult} from "../../models/authApiResults";
import { environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = '/login';
  private redirectUrl = '/courses';
  private isAuthorized$$ = new BehaviorSubject(!!this.sessionStorageService.getToken());
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) { }

  login(user: User) {
    return this.http.post<LoginResult>(`${environment.apiURL}/login`, user)
      .pipe(
        tap(res => {
          if(res.successful) {
            console.log('Auth is OK');
            this.sessionStorageService.setToken(res.result);
            this.isAuthorized$$.next(true);
          } else {
            console.log('Auth is failed');
          }
    }));
  }

  logout(){
    const authorization = this.sessionStorageService.getToken();
    this.http.delete<{successful: boolean}>(`${environment.apiURL}/logout`, {body: authorization})
      .pipe(
        tap(res => {
          if (res.successful){
            this.sessionStorageService.deleteToken();
            this.isAuthorized$$.next(false);
          }
        })
      );
  }

  register(user: User) {
    return this.http.post<RegisterResult>(`${environment.apiURL}/register`, user);
  }

  get isAuthorised() {
    return this.isAuthorized$$.getValue();
  }

  getLoginUrl() {
    return this.loginUrl;
  }

  getRedirectUrl(){
    return this.redirectUrl;
  }

}
