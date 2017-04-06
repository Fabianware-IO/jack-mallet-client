import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Version, Data, SubscriberQ } from './app.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export const flaskUrl = 'http://localhost:5000/api/v1';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getVersion(): Observable<Version> {
    const path = flaskUrl + '/version.properties';
    console.log('requesting version service from server=', path);
    return this.http.get(path)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  getData(): Observable<Data> {
    const path = flaskUrl + '/data';
    console.log('requesting data service from server=', path);
    return this.http.get(path)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  getSubscribers(): Observable<SubscriberQ> {
    const path = flaskUrl + '/subscribers';
    console.log('requesting data service from server=', path);
    return this.http.get(path)
      .map(res => res.json())
      .catch(error => Observable.throw(error.json().error || 'Server Error'));
  }

}
