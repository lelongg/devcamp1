import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class Sisyphe {

  private endpoint_page = 'https://wrapapi.com/use/Sisyphe/inrap_archeo/page/0.0.1';
  private endpoint_site = 'https://wrapapi.com/use/Sisyphe/inrap_archeo/site/0.0.4';
  private wrap_api_key = 'zmRUp4fUj2ST34GS1Uws7ZYy49ClRbjA';

  constructor(private http: HttpClient) {}

  getSite(site: string): Observable<any> {
    return this.http.get<any>(this.endpoint_page,  {
      params: {
        nom_du_site: site,
        wrapAPIKey: this.wrap_api_key
      }
    }).map((data) => {
      console.log(data);
      return data.data.output;
    })
      .map((inrapUrl) => {
        console.log(inrapUrl);
        const result = inrapUrl.split('/');
        console.log('result', result);
        return result[result.length - 1] || '';
      })
      .flatMap((inrapValue) => {
        return this.http.get<any>(this.endpoint_site, {
          params: {
            site_code_name: inrapValue,
            wrapAPIKey: this.wrap_api_key
          }
        });
      });
  }
}
