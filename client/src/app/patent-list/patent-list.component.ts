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

  constructor(
    protected patentService: PatentService
  ) { }
  ngOnInit() {
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    this.patentService.getPatentContract(this.web3)
      .subscribe((lib) => {
        console.log(lib.networks);
        this.library = this.web3.eth.contract(lib.abi).at('0x36de83d4a07741be65e176ac62426eb36c9779fd');
        window.lib = this.library;
      var events = this.library.patentCreated({}, {fromBlock: 0, toBlock: 'latest'});
        events.get(function(error, result){
          console.log(result);
        });
        this.getPatent("32");
    })
    // ps.createPatent("32", "2354", "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&co1=AND&d=PTXT&s1=blockchain&OS=blockchain&RS=blockchain", {from: web3.eth.coinbase, gas:2000000},(err,res) => {
    //   console.log(res);
    //   patent.confirmPatent.sendTransaction({from: web3.eth.coinbase, gas: 200000}, (err,res) => {console.log(err,res)})
    // })
    // console.log(patent);
    // window.patent = patent;
    window.web3 = this.web3;
    window.createPatent = this.createPatent;
  }

  getPatent(patent: string): any {
    console.log(this.library);
    console.log(this.library.getPatentById.call("32"), ''+this.library.getPatentById.call("32") == '0x0000000000000000000000000000000000000000')
    if(''+this.library.getPatentById.call("32") == '0x0000000000000000000000000000000000000000') {
      console.log('created');
      this.createPatent("32");
      return false;
    } else {
    this.patentService.getPatent()
      .subscribe((lib) => {
        this.patent = this.web3.eth.contract(lib.abi).at(this.library.getPatentById.call("32"));
        console.log(this.library.getPatentById.call("32"));
        console.log(this.patent._owner());
        window.patent = this.patent;
    })
    }
  }
  createPatent(id: string) {
    console.log(this.library);
      this.library.createPatent.sendTransaction("32","32","test","test","test", {from: window.web3.eth.coinbase, gas: 4000000})
    }

}
