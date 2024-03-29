import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { jsonHeader } from '../utils';
import { flaskUrl } from '../app.service';

@Injectable()
export class AuthenticationService {

  private loginSuccessful = true;

  constructor(private http: Http, private router: Router) { }

  public isAuthenticated() {
    return !this.checkTokenExpired();
  }

  public clearUserDataAndRedirect() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  /**
   * Sends a login request
   *
   */
  public login(body: string) {
    return this.http.post(flaskUrl + '/login', body, jsonHeader())
      .map(this.extractToken)
      .catch(this.handleError);
  }

  /**
   * Logout method to send a logout request to the server and clear localStorage
   */
  public logout() {
    if (this.isAuthenticated()) {
      this.postResource('', flaskUrl + '/logout')
        .subscribe((data) => this.handleLogout(data),
        (error) => {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
        },
        () => console.log('got data')
        );
    } else {
      this.clearUserDataAndRedirect();
    }
  }

  /**
   *
   * Post resource to send a post request to the server.
   * Extracts the current token from the local storage else redirects to
   * session expired modal.
   */
  public postResource(body: String, url: string) {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authentication-Token': token });
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, options);
  }

  /**
   * Get resource to fetch data from server using an end point as `url`
   */
  public getResource(url: string) {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authentication-Token': token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(url, options);
  }

  private extractToken(res: Response) {
    const body = res.json();
    if (res.status === 200) {
      const response = 'response';
      const user = 'user';
      const userString = JSON.stringify(body[response][user]);
      localStorage.setItem('user', userString);
    }
  }

  /**
   *
   * This function checks if the current token of the app has been expired
   * based on the first time authentication from server
   */
  private checkTokenExpired() {

    // const expiryTime = Number(localStorage.getItem('token_age'));
    // const curTime = Math.floor(new Date().getTime() / 1000);
    // if (curTime > expiryTime) {
    //   return true;
    // }
    if (localStorage.getItem('user')) {
      // console.log('checkTokenExpired :: expired=false');
      return false;
    }
    // console.log('checkTokenExpired :: expired=true');
    return true;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  /**
   *
   * On logout, clear the local storage and redirect to login page
   */
  private handleLogout(data: Response) {
    if (data.status === 200) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }
}
