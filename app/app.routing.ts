import { Router, RouterModule } from '@angular/router';

import { AboutComponent }     from './AboutComponent/about.component';
import { AlbumComponent }	  from './AlbumComponent/album.component';
import { ContactComponent }   from './ContactComponent/contact.component';
import { HomeComponent }      from './HomeComponent/home.component';
import { PortfolioComponent } from './PortfolioComponent/portfolio.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:name', component: AlbumComponent }
]);