import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hoge } from './hoge';

@Injectable()
export class HogeService {
  private hogeUrl = 'api/hoge';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  requestGetHoge(): Promise<Hoge[]> {
    console.log('a');
    return this.http.get(this.hogeUrl)
      .toPromise()
      .then(response => response.json().data as Hoge[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
@Injectable()
export class Hoge2Service {
  hoge: Hoge = null;
}
