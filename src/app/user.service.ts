import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: any = null;

  setUser(user: any) {
    this.user = user;
    console.log('User set in service:', this.user);
  }

  getUser() {
    console.log('User retrieved from service:', this.user);
    return this.user;
  }

  clearUser() {
    this.user = null;
  }
}