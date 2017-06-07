import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { getContract, getPatent } from './patent.contract';

declare var window: any;

@Injectable()
export class PatentService {

  constructor(
    private http: Http
  ) { }

  getPatentContract(web3) {
    return getContract(web3);
  }
  getPatent(web3, id) {
    return getPatent(web3, id);
  }
  createPatent(name: string, description: string) {

  }
}
