import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../my-objects/user";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  api = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.api, user);
  }
}
