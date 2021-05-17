import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StorePageComponent} from "../../page/store-page/store-page.component";
import {FilterPanelComponent} from "../../page/store-page/filter-panel/filter-panel.component";

const storeRoutes: Routes = [
  {
    path: '',
    component: StorePageComponent
  }
];

@NgModule({
  declarations: [
    StorePageComponent,
    FilterPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(storeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StoreModule { }
