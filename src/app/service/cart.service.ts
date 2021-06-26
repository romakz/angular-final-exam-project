import { Injectable } from '@angular/core';
import {Product} from '../my-objects/product';

@Injectable()
export class CartService {
  products: Product[] = [];
  totalCost = 0;

  constructor() { }

  addProduct(product: Product): void {
    this.totalCost += product.price;
    this.products.push(product);
  }

  removeProduct(productId: number): void {
    let newList: Product[] = [];
    let k = 0;

    for (let p of this.products) {
      if (p.id === productId && k === 0) {
        k++;
        this.totalCost -= p.price;
        continue;
      }
      newList.push(p);
    }

    this.products = newList;
  }

  clearCart(): void {
    this.products = [];
    this.totalCost = 0;
  }
}
