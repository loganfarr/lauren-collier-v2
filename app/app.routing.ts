import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './HomeComponent/home.component';
import { PortfolioComponent } from './PortfolioComponent/portfolio.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent }
]);