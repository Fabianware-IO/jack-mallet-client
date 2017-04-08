import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { UserService } from '../users';

@Component({
    selector: 'app-login',
    template: `
    <div class="ui middle aligned center aligned grid" style="height: 100%; margin: 0;">
        <div class="column" style="max-width: 600px;">
            <div class="ui segment">
                <div *ngIf="loginText" class="ui negative message">
                    <i class="close icon"></i>
                    <div class="header">Error: {{ loginText }}</div>
                </div>
                <form class="ui form" [class.error]="loginForm.valid">
                    <div class="field" [class.error]="loginForm.controls.username.invalid">
                        <sm-input [control]="loginForm.controls.username" type="text" label="Email Address"></sm-input>
                    </div>
                    <div class="field" [class.error]="loginForm.controls.password.invalid">
                        <sm-input [control]="loginForm.controls.password" type="password" label="Password"></sm-input>
                    </div>
                    <button class="ui black button" (click)="submit()">Log In</button>
                </form>
            </div>
        </div>
    </div>
    `,
    providers: [AuthenticationService]
})
export class LoginFormComponent {
    public loginForm: FormGroup;
    private color: string;
    public loginText: string;

    constructor(private fb: FormBuilder,
        private as: AuthenticationService,
        private router: Router,
        private us: UserService
    ) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    public login() {
        const credentials = this.loginForm.value;
        this.as.login(this.loginForm.value)
            .subscribe(
                success => {
                    console.log('login :: setting user to ', this.loginForm.value);
                    this.us.user = this.loginForm.value;
                    this.router.navigate(['/dashboard']);
                },
                error => this.handleError(error)
            );
    }
    private handleError(error: any) {
        console.log('error received :: error=', error);
        const errorMessage = error;
        console.error(errorMessage);
        this.color = 'red';
        this.loginText = errorMessage;
        return Observable.throw(errorMessage);
    }

    private submit() {
        console.log('logging in');
        this.loginText = null;
        this.login();
    }
}
