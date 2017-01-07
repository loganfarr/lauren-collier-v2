import { Component, OnInit }     from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
// import { Observable }            from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

import { AlbumService } from '../AlbumService/album.service';

@Component({
	selector: 'album',
	templateUrl: 'app/AlbumComponent/album.component.html',
  styleUrls: ['app/AlbumComponent/album.style.css']
})

export class AlbumComponent implements OnInit {
  albumName: string = '';
  photos: any = [];
  header: any = [];

  private viewingMode = 'thumbnails';

  overlayActive = false;

  constructor(
    private _router: Router, 
    private _ActivatedRoute: ActivatedRoute,
    private _AlbumService: AlbumService) {}

  ngOnInit() {
    this._ActivatedRoute.params.subscribe(params => {
      this.albumName = params['name'];

      this._AlbumService.getPhotos(this.albumName).subscribe(res => {
        this.header = res.header;
        this.photos = res.photos;
      });
    });
  }

  changeViewingMode(mode: string) {
    if(mode != 'thumbnails' && mode != 'list') {
      alert('Invalid viewing mode');
      return;
    }

    this.viewingMode = mode;
  }
}