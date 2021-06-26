import {OrderItem} from './order-item';

export class UserOrder {
  public userId: number;
  public orderItems: OrderItem[];
  public date: Date;
  public cost: number;

  constructor(userId: number, orderItems: OrderItem[], date: Date, cost: number) {
    this.userId = userId;
    this.orderItems = orderItems;
    this.date = date;
    this.cost = cost;
  }
}
