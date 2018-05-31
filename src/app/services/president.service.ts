import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";


@Injectable()
export class PresidentService {

  constructor(private http: Http) { }

  getPresidents() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(environment.apiUrl + 'President', options).toPromise();
  }
}
