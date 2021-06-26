export class Product {
  public id: number;
  public name: string;
  public price: number;
  public urlImg: string;

  constructor(id: number, name: string, price: number, urlImg: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.urlImg = urlImg;
  }
}
