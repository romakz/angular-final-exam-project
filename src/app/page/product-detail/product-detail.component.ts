import { Component, OnInit } from '@angular/core';
import {Product} from '../../my-objects/product';
import {ProductService} from '../../service/product.service';
import {CartService} from '../../service/cart.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product(-1, '', -1, '');
  productId: any = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe(res => {
      console.log(this.productId);
      this.product = res;
    });
  }

  addProduct(): void {
    this.cartService.addProduct(this.product);
  }
}
