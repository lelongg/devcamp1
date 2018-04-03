import {IFetcher} from '../interface/ifetcher';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiDiscoverer} from "./ApiDiscoverer";

interface RestModel {
  id: string;
}

export abstract class RestFetcher<T extends RestModel> implements IFetcher<T> {

  private entryPoint: string = "";
  private baseUrl: string = "";

  constructor(protected http: HttpClient, protected apiDiscoverer: ApiDiscoverer) {

      this.entryPoint = this.apiDiscoverer.endpoint + "/" + this.getTypeName();
  }

  getEntryPoint(): string {
    console.log("EntryPoint", this.entryPoint);
    return this.entryPoint;
  }

  abstract getTypeName(): string;

  save(item): Observable<any> {
      return this.http.put(this.getEntryPoint(), item);
  }

  edit(item: T) {
    return this.http.patch(this.getEntryPoint() + "/" + item.id, item);
  }

  get(id: string, options?: HttpHeaders): Observable<T> {
    return this.http.get<T>(this.getEntryPoint() + "/" + id);
  }

  getAll(options?: HttpHeaders | string):  Observable<T[]> {
    return this.http.get<T[]>(this.getEntryPoint());
  }

  remove(item: T) {
    return  this.http.delete(this.getEntryPoint() + "/" + item.id);
  }

}
