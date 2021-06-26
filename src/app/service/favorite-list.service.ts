import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {FavoriteProduct} from '../my-objects/favorite-product';

@Injectable()
export class FavoriteListService {

  api = 'http://localhost:3000/favoriteList';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  public getFavoriteList(userId: number): Observable<FavoriteProduct[]> {
    return this.http.get<FavoriteProduct[]>(this.api + `?userId=${userId}`);
  }

  public addFavoriteProduct(favoriteProduct: any): Observable<FavoriteProduct> {
    return this.http.post<FavoriteProduct>(this.api, favoriteProduct);
  }
}
