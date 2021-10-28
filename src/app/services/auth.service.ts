import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getLoginValue: string;
  currentLoginValue: boolean;
  userName: string;

  constructor(private router: Router) {
    this.getLoginValue = localStorage.getItem('loginStatus');
    if (this.getLoginValue == null) {
      this.currentLoginValue = false;
    } else if (this.getLoginValue) {
      this.currentLoginValue = true;
    } else {
      this.currentLoginValue = false;
    }
  }

  logIn(enteredName, enteredPass) {
    if (enteredName.value == '' || enteredPass.value == '') {
      alert('Enter Valid Values');
    } else {
      this.currentLoginValue = true;
      localStorage.setItem(
        'loginStatus',
        JSON.stringify(this.currentLoginValue)
      );
      this.userName = enteredName;
      this.router.navigate(['dashboard']);
    }
  }

  logOut() {
    this.currentLoginValue = false;
    localStorage.removeItem('loginStatus');
    this.router.navigate(['login']);
  }
}
