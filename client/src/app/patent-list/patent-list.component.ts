import { Component, OnInit } from '@angular/core';
import { PatentService } from "app/shared/service/patent.service";
import * as Web3 from "web3";

declare var window: any;
@Component({
  selector: 'app-patent-list',
  templateUrl: './patent-list.component.html',
  styleUrls: ['./patent-list.component.css']
})
export class PatentListComponent implements OnInit {
  library: any;
  patent: any;
  web3: any;
  patents: any = [];

  constructor(
    protected patentService: PatentService
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
        this.library = this.web3.eth.contract(lib.abi).at('0x65625EDaaE34825BA76606F80EE0559Acc0E8ff2');
        window.lib = this.library;
        var events = this.library.patentCreated({}, { fromBlock: 1114250, toBlock: 'latest' });
        events.get((err, result) => {
          this.patents = result;
        });
        this.getPatent("32")
      })
    setInterval(() => {
      this.patents = this.patents || [];
    }, 2000)
    window.web3 = this.web3;
    window.createPatent = this.createPatent;
  }

  closeBidding() {
    this.patent.openBidding(2, {from: window.web3.eth.coinbase, gas: 4000000})
  }

  openBidding() {
    this.patent.openBidding(2, {from: window.web3.eth.coinbase, gas: 4000000})
  }
  registerForBidding() {
    this.patent.registerForBidding("24", {from: window.web3.eth.accounts[1], gas: 4000000})
  }
  
  bid() {
    this.web3.eth.sendTransaction({ to: this.patent.address, from: this.web3.eth.coinbase, value: 20000, gas: 400000 })
  }
  refundBid() {
    this.patent.refundBid({ from: window.web3.eth.coinbase, gas: 3000000 }, (err, res) => {
      console.log(res);
    })
  }
  getPatent(patent: string): any {
    this.library.getPatentById.call("32", (err, res) => {
      console.log('' + res == '0x');
      if ('' + res == '0x0000000000000000000000000000000000000000' || '' + res == '0x') {
        console.log('created');
        this.createPatent("32");
        return false;
      } else {
        this.patentService.getPatent()
          .subscribe((lib) => {
            this.patent = this.web3.eth.contract(lib.abi).at(res);
            console.log(res);
            window.patent = this.patent;
          })
      }
    });
  }
  createPatent(id: string) {
    console.log(this.library);
    this.library.createPatent.sendTransaction("32", "32", "test", "test", "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&co1=AND&d=PTXT&s1=blockchain&OS=blockchain&RS=blockchain", { from: window.web3.eth.coinbase, gas: 4000000 }, (err, res) => {
      console.log(res);
    })
  }

}
