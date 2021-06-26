import {Product} from './product';

export class FavoriteProduct {
  public id: number;
  public userId: number;
  public product: Product;

  constructor(id: number, userId: number, product: Product) {
    this.id = id;
    this.userId = userId;
    this.product = product;
  }
}
