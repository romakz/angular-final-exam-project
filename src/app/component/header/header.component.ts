import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from "../../service/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchForm = new FormGroup({
    inputText: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  clickSearchBtn(): void {
    if (this.searchForm.valid) {
      this.router.navigate(['/store/search', this.searchForm.getRawValue().inputText]);
    }
  }

  isAuth(): boolean {
    return this.authService.getIsAuth();
  }

  getEmail(): string | null {
    return this.authService.getUserEmail();
  }
}
