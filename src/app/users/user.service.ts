import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    private _user: User;

    constructor(private router: Router) {}

    set user(user: User) {
        this._user = user;
    }

    get user() {
        if (!this._user) {
            const user = localStorage.getItem('user');
            if (!user) {
                // no user in local storage, redirect to login
                this.router.navigate(['/login']);
            } else {
                this._user = JSON.parse(user);
                return this._user;
            }
        } else {
            return this._user;
        }
    }
}
