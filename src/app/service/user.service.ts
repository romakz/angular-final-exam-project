import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../my-objects/user";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  api = '/users';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.api, user);
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(this.api + '/' + userId);
  }

  updateUserData(user: User): Observable<User> {
    return this.http.put<User>(this.api, user);
  }
}
