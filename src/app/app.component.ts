import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DataApp} from './data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  public location: any;

  constructor(public dataApp: DataApp) {
    this.location = {
      latitude: 48.270028317,
      longitude: 2.43588126966
    };
  }
}
