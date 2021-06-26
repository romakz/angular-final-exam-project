import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../my-objects/product';

@Injectable()
export class ProductService {
  api = '/products';

  constructor(private http: HttpClient) { }

  public getProductsByTags(tagName: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + `/filter-tag?name=` + tagName);
  }

  getProductsFilter(request: string): Observable<Product[]> {
    console.log(request);
    return this.http.post<Product[]>(this.api + '/filter', request);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + '/all');
  }

  getProductsByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + '?name=' + name);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.api + `/${id}`);
  }
}
