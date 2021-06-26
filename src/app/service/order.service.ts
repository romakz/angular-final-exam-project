import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserOrder} from '../my-objects/user-order';

@Injectable()
export class OrderService {
  api = '/orders';

  constructor(
    private http: HttpClient,
  ) { }

  makeOrder(order: UserOrder): Observable<UserOrder> {
    console.log(order);
    return this.http.post<UserOrder>(this.api, order);
  }

  getOrderByUserId(userId: number): Observable<UserOrder[]> {
    return this.http.get<UserOrder[]>(this.api + `?userId=${userId}`);
  }
}
