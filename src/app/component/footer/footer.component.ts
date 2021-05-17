import { Component, OnInit } from '@angular/core';
import {ProductType} from '../../my-objects/product-type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  menuList: ProductType[] = [
    new ProductType('Смартфоны и гаджеты', ['Смартфоны', 'Смартфоны Apple', 'Смартфоны Samsung', 'Смартфоны Huawei']),
    new ProductType('Ноутбуки и компьютеры', ['Ноутбуки', 'Игровые ноутбуки', 'Apple Macbook']),
    new ProductType('Всё для геймеров', ['Консоли Xbox', 'Консоли Nintendo', 'Консоли PlayStation'])
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
