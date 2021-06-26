import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../my-objects/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {
  products: Product[] = [];
  paramUrl: string | null = '';
  paramName: string | null = '';

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramUrl = this.route.snapshot.paramMap.get('tag');
    this.paramName = this.route.snapshot.paramMap.get('name');

    if (this.paramName !== null && this.paramName !== '') {
      this.productService.getProductsByName(this.paramName).subscribe(res => {
        this.products = res;
      });
    } else if (this.paramUrl !== null && this.paramUrl !== '') {
      this.productService.getProductsByTags(this.paramUrl).subscribe(res => {
        this.products = res;
      });
    } else {
      this.productService.getAllProducts().subscribe(res => {
        this.products = res;
      });
    }
  }

  getRequest(request: any): void {
    this.productService.getProductsFilter(request).subscribe(res => {
      this.products = res;
    });
  }
}
