import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../my-objects/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = new Product(-1, '', -1, '', []);

  constructor() { }

  ngOnInit(): void {
  }

}
