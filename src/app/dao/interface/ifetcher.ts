import {Observable} from 'rxjs/Observable';

export interface IFetcher<T> {
  get(id: string, options?: any): Observable<T>;
  getAll(options?: any): Observable<Array<T>>;
  save(event: T);
  edit(event: T);
  remove(event: T);
}
