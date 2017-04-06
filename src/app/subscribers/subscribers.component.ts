import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { SubscriberQ } from '../app.model';
import { SemanticModalComponent } from 'ng-semantic/ng-semantic';

@Component({
    selector: 'app-subscribers',
    providers: [AppService],
    template: `
      <div class="ui container">
          <br/><br/>
          <table class="ui inverted table">
            <thead>
              <tr>
                <th>ID</th>
                <th>USERNAME</th>
                <th>PASSWORD</th>
                <th>REGISTRATION DOMAIN</th>
                <th>OUTBOUND PROXY</th>
                <th>REGISTRATION INTERVAL</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let s of subscribers">
                <td>{{ s._id['$oid'] }}</td>
                <td>{{ s.username }}</td>
                <td>{{ s.password }}</td>
                <td>{{ s.registrationDomain }}</td>
                <td>{{ s.outboundProxy }}</td>
                <td>{{ s.registrationInterval }}</td>
              </tr>
            </tbody>
          </table>
          <button (click)="show()"class="ui black icon button">
            <i class="plus icon"></i>
            Subscriber
          </button>
          <sm-modal title="Add Subscriber" #addSubscriberModal>
            <modal-content>
                <form class="ui form">
                    <div class="field">
                        <sm-input type="text" label="Username"></sm-input>
                    </div>
                    <div class="field">
                        <sm-input type="text" label="Password"></sm-input>
                    </div>
                    <div class="field">
                        <sm-input type="text" label="Registration Domain"></sm-input>
                    </div>
                    <div class="field">
                        <sm-input type="text" label="Outbound Proxy"></sm-input>
                    </div>
                    <div class="field">
                        <sm-input type="text" label="Registration Interval"></sm-input>
                    </div>
                </form>
            </modal-content>
            <modal-actions>
                <button class="ui black button" (click)="submit()">Save
                </button>
            </modal-actions>
            <h2>Add Subscriber Modal</h2>
          </sm-modal>
      </div>
    `
})
export class SubscribersComponent implements OnInit {
    @ViewChild(SemanticModalComponent) addSubscriberModal: SemanticModalComponent;
    subscribers: SubscriberQ;
    errorMessage: string;

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.appService.getSubscribers().subscribe(
            subscribers => this.subscribers = subscribers,
            error => this.errorMessage = error
        );
    }

    show() {
        this.addSubscriberModal.show();
    }

    submit() {
        console.log('SubscribersComponent :: submitted form');
    }
}
