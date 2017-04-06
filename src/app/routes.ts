import { Routes } from '@angular/router';
import { LoginFormComponent } from './login';
import { HomeComponent } from './home';
import { NotFoundComponent } from './errors';
import { AuthenticationGuard } from './authentication';
import { DashboardComponent } from './dashboard';
import { ReportsComponent } from './reports';
import { TestRunsComponent } from './testruns';
import { SubscribersComponent } from './subscribers';
import { UserProfileComponent } from './users';
import { SettingsComponent, EnvironmentsComponent, WebhooksComponent, AgentsComponent } from './settings';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: 'login', component: LoginFormComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard]},
    { path: 'reports', component: ReportsComponent, canActivate: [AuthenticationGuard]},
    { path: 'testruns', component: TestRunsComponent, canActivate: [AuthenticationGuard]},
    { path: 'subscribers', component: SubscribersComponent, canActivate: [AuthenticationGuard]},
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthenticationGuard]},
    { path: 'settings', component: SettingsComponent, children: [
        { path: '', redirectTo: 'environments', pathMatch: 'full' },
        { path: 'environments', component: EnvironmentsComponent },
        { path: 'webhooks', component: WebhooksComponent },
        { path: 'agents', component: AgentsComponent }
    ], canActivate: [AuthenticationGuard]},
    { path: '**', component: NotFoundComponent }
];
