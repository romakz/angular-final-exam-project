import { Component, OnInit } from '@angular/core';
import {User} from '../../../my-objects/user';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  user: User = new User(-1, '', '', '', '');
  userForm = this.fb.group({
    id: [-1],
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService) {
    let userId = localStorage.getItem('userId');

    if (userId !== undefined && userId !== null) {
      this.userService.getUserById(userId).subscribe(res => {
        this.user = res;

        this.userForm.setValue(res);
      });

    }
  }

  ngOnInit(): void {
  }

  saveUserData(): void {
    this.userService.updateUserData(this.userForm.getRawValue()).subscribe(res => {
      this.user = res;
      this.userForm.setValue(res);
    });
  }

}
