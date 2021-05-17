import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./page/main-page/main-page.component";
import {LoginPageComponent} from "./page/login-page/login-page.component";
import {RegistrationPageComponent} from "./page/registration-page/registration-page.component";
import {MyAccountPageComponent} from "./page/my-account-page/my-account-page.component";

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'my-account',
    component: MyAccountPageComponent
  },
  {
    path: 'store',
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
