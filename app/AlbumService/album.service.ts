import { Http } 	    from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AlbumService {
  constructor(private _http: Http) {}

  getPhotos(category: string) {
  	return this._http.get('/data/'+category+'.json').map(res => res.json());
  }
}