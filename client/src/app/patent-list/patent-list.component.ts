import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { PatentService } from "app/shared/service/patent.service";
import * as Web3 from "web3";

declare var window: any;
@Component({
  selector: 'app-patent-list',
  templateUrl: './patent-list.component.html',
  styleUrls: ['./patent-list.component.css']
})
export class PatentListComponent implements OnInit, OnDestroy {
  library: any;
  patent: any;
  web3: any;
  patents: any = [];
  state = ['Closed', 'OpenForBidding', 'Escrow', 'Dispute'];
  interval :any;
  create: any = {url: 'http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&co1=AND&d=PTXT&s1=blockchain&OS=blockchain&RS=blockchain'};

  constructor(
    protected patentService: PatentService,
    protected router: Router
  ) { }
  ngOnInit() {
    let self = this;
    if (typeof window.web3 !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    this.patentService.getPatentContract(this.web3)
      .subscribe((lib) => {
        this.library = this.web3.eth.contract(lib.abi).at('0x68cb2bab4308f9c3b2d51e608d92a4474f14ed50 ');
        window.lib = this.library;
        this.getContracts();
      })
    setInterval(() => {
      this.patents = this.patents || [];
    }, 2000)
    window.web3 = this.web3;
    window.createPatent = this.createPatent;
  }
  
  getContracts() {
      var events = this.library.patentCreated({}, { fromBlock: 1135160, toBlock: 'latest' });
      events.watch((err, r) => {
        r.date = new Date(r.args.date*1000);
        this.patentService.getPatent()
          .subscribe((pat) => {
            let patent = this.web3.eth.contract(pat.abi).at(r.args.patentAddress);
            patent._state((err,res) => {
              r.state = res;
            })
            window.patent = patent;
          })
          this.patents.push(r);
      });
  }
  ngOnDestroy() {
  }
  
  goToPatent(id: string) {
    this.router.navigate([`./${id}`]);
  }
  getPatent(patent: string): any {
    this.library.getPatentById.call("33", (err, res) => {
      if ('' + res == '0x0000000000000000000000000000000000000000' || '' + res == '0x') {
        console.log('created');
        return false;
      } else {
        console.log('not created');
      }
    });
  }
  createPatent(id: string) {
    this.library.createPatent.sendTransaction(this.create.name, this.create.description, this.create.abstract, this.create.inventors, this.create.url, { from: window.web3.eth.coinbase, gas: 4000000 }, (err, res) => {
      console.log(err, res);
      this.create = {};
    })
  }

}
