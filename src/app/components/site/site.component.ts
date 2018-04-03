import {Component, Input} from '@angular/core';
import {Site} from '../../models/site.model';
import {Sisyphe} from '../../sisyphe';

@Component({
  selector: 'app-site-see',
  templateUrl: 'site-see.html'
})
export class SiteSeeComponent{

  title: string;
  subtitle: string;
  resume: string;
  content: string;
  gallery: any = [];

  siteName = '';


  @Input()
  set site(site: Site) {
    this.title = this.subtitle = this.resume = this.content = '';
    console.log('site', site.name);
    this.title = site.name;
    this.gallery = [];
    if (site) {
      this.sisyphe.getSite(site.name)
        .subscribe((result) => {
          console.log(result);
          this.gallery = result.data.gallery || [];
          this.title = result.data.title;
          this.subtitle = result.data.subtitle;
          this.resume = result.data.content[0];
          this.content = result.data.content[1];
          console.log(this.gallery);
        });
    }
  }

  constructor(private sisyphe: Sisyphe) {}


}
