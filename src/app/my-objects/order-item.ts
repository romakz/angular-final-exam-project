import {Product} from './product';

export class OrderItem {
  public productId: number;
  public product: Product;

  constructor(productId: number, product: Product) {
    this.productId = productId;
    this.product = product;
  }
}
