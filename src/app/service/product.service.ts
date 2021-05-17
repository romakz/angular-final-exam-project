import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../my-objects/product';

@Injectable()
export class ProductService {
  api = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  public getProductsByTags(tag: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + `?tags_like=` + tag);
  }

  getProductsFilter(request: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + request);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  getProductsByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + '?name_like=' + name);
  }
}
