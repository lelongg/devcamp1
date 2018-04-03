import {Component, Input} from '@angular/core';
import {Site} from '../../models/site.model';
import {Sisyphe} from '../../sisyphe';

@Component({
  selector: 'app-site-see',
  templateUrl: 'site-see.html',
  styleUrls: ['site-see.scss']
})
export class SiteSeeComponent {

  title: string;
  subtitle: string;
  resume: string;
  content: string;
  gallery: any = [];


  _site: Site;
  loading: boolean;

  siteName = '';


  @Input()
  set site(site: Site) {
    console.log('Site', site);
    this._site = site;
    this.loading = true;
    this.title = this.subtitle = this.resume = this.content = '';
    console.log('site', site.name);
    this.title = site.name;
    this.gallery = [];
    if (site) {
      this.sisyphe.getSite(site.name)
        .subscribe((result) => {
          console.log(result);
          if (result.data) {
            this.gallery = result.data.gallery || [];
            this.title = result.data.title;
            this.subtitle = result.data.subtitle;
            this.resume = result.data.content[0];
            this.content = result.data.content[1];

          }

          this.loading = false;
          console.log(this.gallery);
        });
    }
  }

  constructor(private sisyphe: Sisyphe) {
    this.loading = false;
    this._site = {
      name: '',
      ages: '',
      date_begin: '',
      date_end: '',
      type: ''
    }
  }:


}
