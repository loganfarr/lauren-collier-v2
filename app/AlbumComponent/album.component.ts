import { Component, OnInit }             from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
	selector: 'album',
	templateUrl: 'app/AlbumComponent/album.component.html',
  styleUrls: ['app/AlbumComponent/album.style.css']
})

export class AlbumComponent implements OnInit {
  albumName = '';

  constructor(
    private _router: Router, 
    private _ActivatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._ActivatedRoute.params.subscribe(params => this.albumName = params['name']);
  }
}