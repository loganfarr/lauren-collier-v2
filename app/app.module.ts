import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './HomeComponent/home.component';
import { NavigationComponent }  from './NavigationComponent/navigation.component';
import { routing }              from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule,
    routing 
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NavigationComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
