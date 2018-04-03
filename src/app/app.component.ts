import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DataApp} from './data';
import {Sisyphe} from './sisyphe';
import {Site} from './models/site.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public currentSite: Site;
  public location: any;

  constructor(
    public dataApp: DataApp,
    private sisyphe: Sisyphe
    ) {
    this.location = {
      latitude: 48.270028317,
      longitude: 2.43588126966
    };

    this.sisyphe.getSite('Le dessus-de-Rochefort').subscribe(result => console.log(result));
  }

  changeCurrentSite(item: any) {
    const currentSite = {
      name: item.fields['nom_du_site'],
      ages: item.fields['periode_s'],
      date_begin: item.fields['date_debut'],
      date_end: item.fields['date_fin']
    } as Site;

    this.currentSite = currentSite;
  }


}
