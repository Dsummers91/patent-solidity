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
    window.web3 = this.web3;
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
        window.p = patent;
      });
  }
  ngOnDestroy() {
    // this.interval.clearInterval();
  }

  closeBidding() {
    this.patentContract.closeBidding({ from: window.web3.eth.coinbase, gas: 4000000 }, (err, res) => {
      console.log(res);
    })
  }

  openBidding() {
    this.patentContract.openBidding(2, this.web3.toWei(2, 'ether'), { from: window.web3.eth.coinbase, gas: 4000000 }, (err, res) => {
      console.log(res);
    })
  }
  confirmPatent(name: string) {
    let amount = this.web3.toWei(.001, 'ether');
    this.patentContract.confirmPatent({ value: amount, from: window.web3.eth.coinbase, gas: 4000000 }, (err, res) => {
      console.log(err, res);
    })
  }

  registerForBidding(name: string) {
    console.log(name);
    this.patentContract.registerForBidding(name, { from: window.web3.eth.coinbase, gas: 4000000 }, (err, res) => {
      console.log(err, res);
    })
  }
  dispute() {
    this.patentContract.dispute({ from: window.web3.eth.coinbase, gas: 4000000 }, (err, res) => {
      console.log(err, res);
    })
  }

  nullifyContract() {
    this.patentContract.nullifyContract({ from: window.web3.eth.coinbase, gas: 4000000 }, (err, res) => {
      console.log(err, res);
    })
  }

  approveContract() {
    this.patentContract.approveContract({ from: window.web3.eth.coinbase, gas: 4000000 }, (err, res) => {
      console.log(err, res);
    })
  }
  bid(amount: number) {
    amount = this.web3.toWei(amount, 'ether');
    this.web3.eth.sendTransaction({ to: this.patentContract.address, from: this.web3.eth.coinbase, value: amount, gas: 400000 }, (err, res) => {
      console.log(err, res);
    })
  }
  refundBid() {
    this.patentContract.refundBid({ from: window.web3.eth.coinbase, gas: 3000000 }, (err, res) => {
      console.log(res);
    })
  }
}
