import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './HomeComponent/home.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent }
]);