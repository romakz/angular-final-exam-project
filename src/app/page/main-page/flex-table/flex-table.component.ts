import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../my-objects/product';

@Component({
  selector: 'app-flex-table',
  templateUrl: './flex-table.component.html',
  styleUrls: ['./flex-table.component.scss']
})
export class FlexTableComponent implements OnInit {
  productTypes: string[] = [
    'Смартфоны и гаджеты',
    'Ноутбуки и компьютеры',
    'Всё для геймеров'
  ];

  requestTags: string[] = [
    'smartphone',
    'laptop',
    'console'
  ];

  products: Product[] = [];
  activeIndex = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsByTag(0);
  }

  setActiveIndex(index: number): void {
    this.activeIndex = index;
    this.getProductsByTag(index);
  }

  getActiveIndex(): number {
    return this.activeIndex;
  }

  public getProductsByTag(index: number): void {
    this.productService.getProductsByTags(this.requestTags[index]).subscribe(res => {
      this.products = res;
    });
  }

}
