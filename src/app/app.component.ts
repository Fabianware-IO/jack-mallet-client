import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Data } from './app.model';
import * as $ from 'jquery';
import { AuthenticationService } from './authentication';
import { UserService, User } from './users';

@Component({
  selector: 'app-root',
  providers: [AppService],
  template: `
    <div style="display: flex; min-height: 100vh; flex-direction: column;">
      <app-header></app-header>
      <app-menu *ngIf="loggedIn()"></app-menu>
      <div style="flex: 1">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent implements OnInit {
  title = 'app works!';
  version: string;
  errorMessage: string;

  constructor(private appService: AppService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    console.log('ngOnInit :: initting');
    this.appService.getVersion().subscribe(
      version => this.version = version['version'],
      error => this.errorMessage = <any>error
    );
  }

  loggedIn() {
    return this.authService.isAuthenticated();
  }
}

@Component({
  selector: 'app-header',
  template: `
    <div class="ui inverted borderless attached menu">
      <div class="item">
        <img style="margin: 0px 20px" src="/assets/images/jack-mallet.png">
        <label><h2>JackMallet</h2></label>
      </div>
      <div *ngIf="loggedIn()" class="ui inverted right menu">
        <div class="item">
          <a routerLink="profile" routerLinkActive="active">
            <img class="ui avatar image" src="/assets/images/user-avatar-inverted.png">
            <span>{{ user.fullName }}</span>
          </a>
        </div>
      <div>
    </div>
  `
})
export class AppHeaderComponent implements OnInit {
  private user: User;
  constructor(private authService: AuthenticationService, private us: UserService) {}

  ngOnInit() {
    this.user = this.us.user;
  }

  loggedIn() {
    return this.authService.isAuthenticated();
  }
}

@Component({
  selector: 'app-footer',
  template: `
    <div class="ui inverted borderless attached menu">
      <div class="right menu">
        <div class="item">
          {{ version }}
        </div>
      </div>
    </div>
  `
})
export class AppFooterComponent implements OnInit {
  version: string;
  errorMessage: string;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getVersion().subscribe(
      version => this.version = version.version,
      error => this.errorMessage = <any> error
    );
  }
}

@Component({
  selector: 'app-content',
  providers: [AppService],
  template: `
    <div class="ui container">
      <br/><br/><br/>
      <table class="ui inverted table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let d of data">
            <td>{{ d._id['$oid'] }}</td>
            <td>{{ d.name }}</td>
            <td>{{ d.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class AppContentComponent implements OnInit {
  data: Data;
  errorMessage: string;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getData().subscribe(
      data => this.data = data,
      error => this.errorMessage = <any> error
    );
  }
}

@Component({
  selector: 'app-menu',
  template: `
    <div class="ui inverted borderless attached menu">
      <a class="item" routerLinkActive="active" routerLink="dashboard">Dashboard</a>
      <a class="item" routerLinkActive="active" routerLink="subscribers">Subscribers</a>
      <a class="item" routerLinkActive="active" routerLink="testruns">Test Runs</a>
      <a class="item" routerLinkActive="active" routerLink="reports">Reports</a>
      <div class="ui inverted right menu">
        <a class="item" routerLinkActive="active" routerLink="settings"><i class="inverted large setting icon"></i></a>
      </div>
    </div>
  `
})
export class AppMenuComponent {
  active: string;
}
