import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }          from '@angular/http';

import { AppComponent }         from './app.component';
import { AboutComponent }       from './AboutComponent/about.component';
import { AlbumComponent }       from './AlbumComponent/album.component';
import { ContactComponent }     from './ContactComponent/contact.component';
import { HomeComponent }        from './HomeComponent/home.component';
import { NavigationComponent }  from './NavigationComponent/navigation.component';
import { PortfolioComponent }   from './PortfolioComponent/portfolio.component';
import { PortfolioService }     from './PortfolioService/portfolio.service';
import { routing }              from './app.routing';
import { SpinnerComponent }     from './SpinnerComponent/spinner.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    routing 
  ],
  declarations: [ 
    AppComponent,
    AboutComponent,
    AlbumComponent,
    ContactComponent,
    HomeComponent,
    NavigationComponent,
    PortfolioComponent,
    SpinnerComponent
  ],
  providers: [
    PortfolioService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
