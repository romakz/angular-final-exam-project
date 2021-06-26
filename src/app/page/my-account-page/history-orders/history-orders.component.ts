import { Component, OnInit } from '@angular/core';
import {UserOrder} from '../../../my-objects/user-order';
import {OrderService} from '../../../service/order.service';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-history-orders',
  templateUrl: './history-orders.component.html',
  styleUrls: ['./history-orders.component.scss']
})
export class HistoryOrdersComponent implements OnInit {
  orders: UserOrder[] = [];

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.orderService.getOrderByUserId(Number(this.authService.userId)).subscribe(res => {
      this.orders = res;
    });
  }
}
