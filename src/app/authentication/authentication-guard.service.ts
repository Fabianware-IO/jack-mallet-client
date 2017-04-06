import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private auth: AuthenticationService, private router: Router) {}

    canActivate() {
        if (!this.auth.isAuthenticated()) {
            console.log('AuthenticationGuard :: canActivate=false');
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
