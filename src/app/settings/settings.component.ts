import { Component } from '@angular/core';

@Component({
    selector: 'app-settings',
    template: `
    <br/><br/>
        <div class="ui grid">
            <div class="three wide column">
                <div class="ui vertical fluid tabular menu">
                    <a class="item" routerLinkActive="active" routerLink="environments">
                        Environments
                    </a>
                    <a class="item" routerLinkActive="active" routerLink="webhooks">
                        Webhooks
                    </a>
                    <a class="item" routerLinkActive="active" routerLink="agents">
                        Agents
                    </a>
                </div>
            </div>
            <div class="thirteen wide stretched column">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class SettingsComponent {}

@Component({
    selector: 'app-settings-environments',
    template: `
        <h2>Environments</h2>
    `
})
export class EnvironmentsComponent {}

@Component({
    selector: 'app-settings-webhooks',
    template: `
        <h2>Webhooks</h2>
    `
})
export class WebhooksComponent {}

@Component({
    selector: 'app-settings-agents',
    template: `
        <h2>Agents</h2>
    `
})
export class AgentsComponent {}
