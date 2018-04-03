import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {ApiDiscoverer} from './dao/service/ApiDiscoverer';
import {
  MatButtonModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import {DataApp} from './data';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {SiteSeeComponent} from './components/site/site.component';
import {Sisyphe} from './sisyphe';


@NgModule({
  declarations: [
    AppComponent,
    SiteSeeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGLTVcHm_lNl2vNS5qhLgLmjUItxBudkM'
    }),
    AgmSnazzyInfoWindowModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatExpansionModule
  ],
  providers: [
    ApiDiscoverer,
    DataApp,
    Sisyphe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
