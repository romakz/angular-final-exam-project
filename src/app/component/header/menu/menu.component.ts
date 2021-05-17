import {Component, OnInit} from '@angular/core';
import {ProductType} from '../../../my-objects/product-type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: ProductType[] = [
    new ProductType('Смартфоны и гаджеты', ['Смартфоны', 'Смартфоны Apple', 'Смартфоны Samsung', 'Смартфоны Huawei']),
    new ProductType('Ноутбуки и компьютеры', ['Ноутбуки', 'Игровые ноутбуки', 'Apple Macbook']),
    new ProductType('Всё для геймеров', ['Консоли Xbox', 'Консоли Nintendo', 'Консоли PlayStation'])
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nag1(url: string, tag: string): void {
    this.router.navigate([url, tag]);
  }

  nav2(index: number, i: number): void {
    if (index === 1) {
      if (i === 0) {
        this.router.navigate(['/store', 'smartphone']);
      } else if (i === 1) {
        this.router.navigate(['/store', 'smartphone_apple']);
      } else if (i === 2) {
        this.router.navigate(['/store', 'smartphone_samsung']);
      } else {
        this.router.navigate(['/store', 'smartphone_huawei']);
      }
    } else if (index === 2) {
      if (i === 0) {
        this.router.navigate(['/store', 'laptop']);
      } else if (i === 1) {
        this.router.navigate(['/store', 'laptop_game']);
      } else {
        this.router.navigate(['/store', 'laptop_macBook']);
      }
    } else {
      if (i === 0) {
        this.router.navigate(['/store', 'xbox']);
      } else if (i === 1) {
        this.router.navigate(['/store', 'nintendo']);
      } else {
        this.router.navigate(['/store', 'playstation']);
      }
    }
  }
}
