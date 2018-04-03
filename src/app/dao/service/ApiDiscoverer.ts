
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiDiscoverer {

  protected _endpoint = '/api';

  constructor(
    private http: HttpClient
  ) {}


  get endpoint(): string {
    return this._endpoint;
  }

  set endpoint(value: string) {
    this._endpoint = value;
  }
}
