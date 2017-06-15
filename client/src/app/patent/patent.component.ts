import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatentService } from "app/shared/service/patent.service";
import * as Web3 from "web3";

declare var window: any;

@Component({
  selector: 'app-patent',
  templateUrl: './patent.component.html',
  styleUrls: ['./patent.component.css']
})
export class PatentComponent implements OnInit {
  patent: any = {};
  patentContract: any = {};
  web3: any;
  state = ['Closed', 'OpenForBidding', 'Escrow', 'Dispute']
  interval: any;
  name: string;
  amount: number;

  constructor(
    protected patentService: PatentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (typeof window.web3 !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    this.updatePatent();
    setTimeout(() => {
      this.patent = this.patent || {};
    }, 500);
    this.updatePatent();
    this.patent = this.patent || {};
    this.interval = setInterval(() => {
      this.updatePatent();
      this.patent = this.patent || {};
    }, 2500);
  }
  
  updatePatent() {
      this.patentService.getPatent()
        .subscribe((pat) => {
          let patent = this.web3.eth.contract(pat.abi).at(this.route.snapshot.params['id']);
          patent._state((err, res) => {
            this.patent.state = this.state[res];
          })
          patent._owner((err, res) => {
            this.patent.owner = res;
          })
          patent._patentDescription((err, res) => {
            this.patent.patentDescription = res;
          })
          patent._patentNumber((err, res) => {
            this.patent.patentNumber = res;
          })
          patent._patentUrl((err, res) => {
            this.patent.url = res;
          })
          patent._minimumBid((err, res) => {
            this.patent.minimumBid = this.web3.fromWei(res, 'ether');
          })
          patent._highestBid((err, res) => {
            this.patent.highestBid = this.web3.fromWei(res, 'ether');
          })
          this.patentContract = patent;
        });
    }
  ngOnDestroy() {
    // this.interval.clearInterval();
  }

  closeBidding() {
    this.patentContract.closeBidding({ from: window.web3.eth.coinbase, gas: 4000000 }, (err,res) => {
      console.log(res);
    })
  }

  openBidding() {
    this.patentContract.openBidding(2,this.web3.toWei(2, 'ether'), { from: window.web3.eth.coinbase, gas: 4000000 }, (err,res) => {
      console.log(res);
    })
  }

  registerForBidding(name: string) {
    this.patentContract.registerForBidding("24", { from: window.web3.eth.coinbase, gas: 4000000 }, (err,res) => {
      console.log(res);
    })
  }

  bid(amount: number) {
    amount = this.web3.toWei(amount, 'ether');
    this.web3.eth.sendTransaction({ to: this.patentContract.address, from: this.web3.eth.coinbase, value: amount, gas: 400000 }, (err,res) => {
      console.log(res);
    })
  }
  refundBid() {
    this.patent.refundBid({ from: window.web3.eth.coinbase, gas: 3000000 }, (err, res) => {
      console.log(res);
    })
  }
}
