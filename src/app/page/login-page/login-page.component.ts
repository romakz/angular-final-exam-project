import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { AuthService } from 'src/app/service/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  clickLogin(): void {
    this.authService.login(this.loginForm.getRawValue()).subscribe(res => {
      if (res.length !== 0) {
        this.authService.setUserIdAndEmail(String(res[0].id), res[0].email);
        this.router.navigate(['/my-account/profile-info']);
      }
    });
  }
}
