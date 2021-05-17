import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../my-objects/user";
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  api = 'http://localhost:3000/users';
  userId: string | null = '';
  userEmail: string | null = '';
  isAuth = false;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('userId') != null && localStorage.getItem('userEmail') != null) {
      this.userEmail = localStorage.getItem('userEmail');
      this.userId = localStorage.getItem('userId');
      this.isAuth = true;
    }
  }

  login(user: User): Observable<User[]> {
    return this.http.get<User[]>(this.api + `?email=${user.email}&password=${user.password}`);
  }

  setUserIdAndEmail(userId: string, userEmail: string): void {
    this.userId = userId;
    this.userEmail = userEmail;
    this.isAuth = true;
    localStorage.setItem('userId', String(userId));
    localStorage.setItem('userEmail', userEmail);
  }

  getIsAuth(): boolean {
    return this.isAuth;
  }

  logout(): void {
    this.isAuth = false;
    this.userId = '';
    this.userEmail = '';
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/']);
  }

  getUserEmail(): string | null {
    return this.userEmail;
  }
}
