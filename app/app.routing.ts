import { Router, RouterModule } from '@angular/router';

import { AboutComponent }     from './AboutComponent/about.component';
import { HomeComponent }      from './HomeComponent/home.component';
import { PortfolioComponent } from './PortfolioComponent/portfolio.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'portfolio', component: PortfolioComponent }
]);