import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';
import {Product} from '../../my-objects/product';
import {OrderService} from '../../service/order.service';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {OrderItem} from '../../my-objects/order-item';
import {UserOrder} from '../../my-objects/user-order';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  items: Product[] = [];

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.products;
  }

  removeProduct(id: number): void {
    this.cartService.removeProduct(id);
    this.items = this.cartService.products;
  }

  getTotalCost(): number {
    return this.cartService.totalCost;
  }

  makeOrder(): void {
    if (this.authService.isAuth) {

      let orderItem: OrderItem[] = [];

      for (let p of this.cartService.products) {
        orderItem.push(new OrderItem(p.id, p));
      }

      this.orderService.makeOrder(
        new UserOrder(
          Number(this.authService.getUserId()),
          orderItem,
          new Date(),
          this.cartService.totalCost
        ))
        .subscribe(() => {
          this.cartService.clearCart();
          this.router.navigate(['/my-account/history-orders']);
        });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
