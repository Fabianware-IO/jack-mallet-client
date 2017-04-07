import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'app-user-profile',
    template: `
    <div class="ui container">
      <br/><br/>
      <div class="ui card">
        <div class="image">
          <img src="/assets/images/matthew.png">
        </div>
        <div class="content">
          <a class="header">{{ user.fullName }}</a>
          <div class="meta">
            <span>Joined in 2017</span>
          </div>
        </div>
        <div class="extra content">
          <i class="user icon"></i>
          <span>{{ user.username }}</span>
        </div>
      </div>
    </div>
    `
})
export class UserProfileComponent implements OnInit {
    user: User;
    constructor(private us: UserService) {
      this.user = this.us.user;
    }

    ngOnInit() {
      // this.user = this.us.user;
      // console.log('UserProfileComponent :: ngOnInit :: user=', this.user);
    }
}
