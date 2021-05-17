import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './component/header/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './component/footer/footer.component';
import { FlexTableComponent } from './page/main-page/flex-table/flex-table.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { SliderComponent } from './page/main-page/slider/slider.component';
import { FlexElemCardComponent } from './page/main-page/flex-table/flex-elem-card/flex-elem-card.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegistrationPageComponent } from './page/registration-page/registration-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from "./service/auth.service";
import { MyAccountPageComponent } from './page/my-account-page/my-account-page.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./service/user.service";
import {ProductService} from './service/product.service';
import { NameCutPipe } from './pipe/name-cut.pipe';
import {AccoutPageGuard} from './guard/accout-page.guard';
import {AccoutPaheForChildGuard} from './guard/accout-pahe-for-child.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    FlexTableComponent,
    MainPageComponent,
    SliderComponent,
    FlexElemCardComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    MyAccountPageComponent,
    NameCutPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    ProductService,
    AccoutPageGuard,
    AccoutPaheForChildGuard
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
