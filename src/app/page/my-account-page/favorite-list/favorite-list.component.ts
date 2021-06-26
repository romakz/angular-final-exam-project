import { Component, OnInit } from '@angular/core';
import {FavoriteProduct} from '../../../my-objects/favorite-product';
import {FavoriteListService} from '../../../service/favorite-list.service';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  favorites: FavoriteProduct[] = [];

  constructor(
    private favoriteService: FavoriteListService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getFavoritesByUserId();
  }

  getFavoritesByUserId(): void {
    this.favoriteService.getFavoriteList(Number(this.authService.getUserId())).subscribe(res => {
      this.favorites = res;
    });
  }

  updateFavoritesByUserId(): void {
    this.getFavoritesByUserId();
  }

}
