import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../my-objects/product';
import {UserService} from '../../../service/user.service';
import {FavoriteListService} from '../../../service/favorite-list.service';
import {FavoriteProduct} from '../../../my-objects/favorite-product';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = new Product(-1, '', -1, '');
  @Input() showAddBtn = false;
  @Output() updateInfo: EventEmitter<any> = new EventEmitter();
  @Input() favoriteId = -1;

  constructor(
    private authService: AuthService,
    private favoriteService: FavoriteListService
  ) { }

  ngOnInit(): void {
  }

  public addFavoriteProduct(product_: Product): void {
    this.favoriteService.addFavoriteProduct({userId: Number(this.authService.getUserId()), product: product_, productId: product_.id}).subscribe(res => {
      console.log(res);
    });
  }

  deleteFavoriteProduct(product: Product): void {
    this.favoriteService.deleteFavoriteProduct(this.favoriteId).subscribe(res => {
      this.updateInfo.emit();
    });
  }
}
