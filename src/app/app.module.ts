import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {ApiDiscoverer} from './dao/service/ApiDiscoverer';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import {DataApp} from './data';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    //TODO: do not set HERE
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGLTVcHm_lNl2vNS5qhLgLmjUItxBudkM'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [
    ApiDiscoverer,
    DataApp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
