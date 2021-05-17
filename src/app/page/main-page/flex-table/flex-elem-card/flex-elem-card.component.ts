import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../my-objects/product';

@Component({
  selector: 'app-flex-elem-card',
  templateUrl: './flex-elem-card.component.html',
  styleUrls: ['./flex-elem-card.component.scss']
})
export class FlexElemCardComponent implements OnInit {
  @Input() product: Product = new Product(-1,'', -1, '', []);

  constructor() { }

  ngOnInit(): void {}

}
