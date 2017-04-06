import { Injectable } from '@angular/core';
import { User } from './user';

export class UserService {
    private _user: User;

    set user(user: User) {
        this._user = user;
    }

    get user() {
        return this._user;
    }
}
