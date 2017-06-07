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

  constructor(
    protected patentService: PatentService
  ) { }

  ngOnInit() {
    let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    let ps = this.patentService.getPatentContract(web3);
    let patent = this.patentService.getPatent(web3, ps.getPatentById.call("38"))
    ps.createPatent("38", "2354", "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&co1=AND&d=PTXT&s1=blockchain&OS=blockchain&RS=blockchain", {from: web3.eth.coinbase, gas:2000000},(err,res) => {
      console.log(res);
      patent.confirmPatent.sendTransaction({from: web3.eth.coinbase, gas: 200000}, (err,res) => {console.log(err,res)})
    })
    console.log(patent);
    window.patent = patent;
    window.pl = ps;
    window.web3 = web3;
    window.createPatent = this.createPatent;
    var events = ps.patentCreated({}, {fromBlock: 0, toBlock: 'latest'});
      events.watch(function(error, result){
        console.log(result);
      });
    setInterval(() => {
      this.createPatent(Math.random()+"")
    }, 5000)
  }

  createPatent(id: string) {
    let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    let ps = this.patentService.getPatentContract(web3);
    let patent = this.patentService.getPatent(web3, ps.getPatentById.call(id))
    ps.createPatent(id, "2354", "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&co1=AND&d=PTXT&s1=blockchain&OS=blockchain&RS=blockchain", {from: web3.eth.coinbase, gas:2000000},(err,res) => {
      console.log(res);
      patent.confirmPatent.sendTransaction({from: web3.eth.coinbase, gas: 200000}, (err,res) => {console.log(err,res)})
    })
  }

}
