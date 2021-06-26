import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StorePageComponent} from "../../page/store-page/store-page.component";
import {FilterPanelComponent} from "../../page/store-page/filter-panel/filter-panel.component";
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ProductCardComponent} from '../../page/store-page/product-card/product-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const storeRoutes: Routes = [
  {
    path: '',
    component: StorePageComponent
  }
];

@NgModule({
  declarations: [
    StorePageComponent,
    FilterPanelComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(storeRoutes),
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    RouterModule,
    ProductCardComponent
  ]
})
export class StoreModule { }
