import { NotFoundComponent } from './errors';
import { HomeComponent } from './home';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { LoginFormComponent } from './login';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './routes';
import { AuthenticationGuard, AuthenticationService } from './authentication';
import { DashboardComponent } from './dashboard';
import { ReportsComponent } from './reports';
import { SettingsComponent, WebhooksComponent, EnvironmentsComponent, AgentsComponent } from './settings';
import { TestRunsComponent } from './testruns';
import { SubscribersComponent } from './subscribers';
import { UserProfileComponent, UserService } from './users';

import { AppComponent, AppHeaderComponent, AppFooterComponent, AppContentComponent, AppMenuComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContentComponent,
    LoginFormComponent,
    NotFoundComponent,
    HomeComponent,
    AppMenuComponent,
    DashboardComponent,
    ReportsComponent,
    TestRunsComponent,
    SettingsComponent,
    SubscribersComponent,
    WebhooksComponent,
    AgentsComponent,
    EnvironmentsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgSemanticModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [AuthenticationGuard, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
