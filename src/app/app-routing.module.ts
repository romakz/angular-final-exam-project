import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./page/main-page/main-page.component";
import {LoginPageComponent} from "./page/login-page/login-page.component";
import {RegistrationPageComponent} from "./page/registration-page/registration-page.component";
import {MyAccountPageComponent} from "./page/my-account-page/my-account-page.component";
import {AccoutPageGuard} from './guard/accout-page.guard';
import {AccoutPaheForChildGuard} from './guard/accout-pahe-for-child.guard';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'my-account',
    component: MyAccountPageComponent,
    canActivate: [AccoutPageGuard],
    canActivateChild: [AccoutPaheForChildGuard]
  },
  {
    path: 'store',
    loadChildren: () => import('./module/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'store/:tag',
    loadChildren: () => import('./module/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'store/search/:name',
    loadChildren: () => import('./module/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
