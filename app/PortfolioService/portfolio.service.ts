import { Http }       from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class PortfolioService {
  constructor(private _http: Http) {}

  getCategories() {
    return this._http.get('/data/categories.json').map(res => res.json());
  }
}