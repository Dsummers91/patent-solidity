import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { getContract, getPatent } from './patent.contract';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import  { environment } from 'environments/environment';
declare var window: any;

@Injectable()
export class PatentService {

  constructor(
    private http: Http
  ) { }

  getPatentContract(web3): Observable<any> {
    if(environment.production) {
      return this.http.get('./patentlibrary.json')
                .map(response => response.json());
    }
    return this.http.get('http://127.0.0.1:8000/patentlibrary')
              .map(response => response.json());
    }
  getPatent(): Observable<any> {
    if(environment.production) {
      return this.http.get('./patent.json')
                .map(response => response.json());
    }
    return this.http.get('http://127.0.0.1:8000/patent')
               .map(response => response.json());
}

}