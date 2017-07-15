// Getting Error: Error: LevelUpArrayAdapter named 'blocks' index out of range;
// Unable to finish test cases until that is fixed
// https://github.com/ethereumjs/testrpc/issues/346


var Patent = artifacts.require("./Patent.sol");
var PatentLibrary = artifacts.require("./PatentLibrary.sol");
contract('Patent', function (accounts) {
  var patentLibrary;
  var patent;
  it("Potential owner should be able to register a patent", function () {
    return PatentLibrary.deployed()
      .then((instance) => {
        patentLibrary = instance;
      })
      .then(() => {
        return patentLibrary.createPatent(965465, "abstrct", "inventors", "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-bool.html&r=1&f=G&l=50&co1=AND&d=PTXT&s1=blockchain&OS=blockchain&RS=blockchain")
      })
  });


  it("Should be able to get patent by ID from resolver", function () {
    return patentLibrary.getPatentByID(965465)
      .then((address) => {
        assert.notEqual(address, "0x", "address was not found in patent library")
        patent = Patent.at(address);
        return patent.getPatentDetails();
      })
      .then((details) => {
        assert.equal(details[0], "965465", "");
        assert.equal(details[5], accounts[0], "");
        assert.equal(details[6], 0, "Patent not in closed state");
      });
  });

  it("Should not be able to bid on Patent", function () {
    return patent.sendTransaction({ value: 100 })
      .catch(() => {
        let balance = web3.eth.getBalance(patent.address)
        assert.equal(balance.toString(), 0, "Patent not in closed state")
      })
  });

  it("Should be able Open a patent for bidding", function () {
    return patent.openBidding(1)
      .then(() => {
        return patent.getPatentDetails();
      })
      .then((details) => {
        assert.equal(details[6].toString(), 1, "Patent not in bidding state");
      })

  });


  it("Bidder should be able to bid on patent", function () {
    return patent.sendTransaction({ value: 100 })
      .then(() => {
        let balance = web3.eth.getBalance(patent.address)
        assert.equal(balance.toString(), 100, "Patent not in closed state")
      })
  });

  it("Bidder should not be able to bid lower than current winners bid", function () {
    return patent.sendTransaction({ value: 50, from: accounts[1] })
      .then(() => {
        assert.equal(1, 0, "Was able to send a lower bid")
      })
      .catch(() => {
        let balance = web3.eth.getBalance(patent.address)
        assert.equal(balance.toString(), 100, "Patent not in closed state")
      })
  });

  it("Should return money to original sender when outbid", function () {
    losingBidderBalance = web3.eth.getBalance(accounts[0]).toString();
    return patent.sendTransaction({ value: 250, from: accounts[1] })
      .then(() => {
        balance = web3.eth.getBalance(accounts[0]).toString();
        return assert.notEqual(losingBidderBalance, balance, "losing Bidder was not refunded")
      })
  });

  it("Should close bidding after time period has ended", function () {
    return patent.closeBidding()
      .then(() => {
        assert.equal(1, 0, "Was able to close before auction end");
      })
      .catch(() => {
        assert.equal(1, 1, "Couldnt close bidding, waiting for auction to end");
        return sleep(5200)
      })
      .then(() => {
        return patent.closeBidding()
      })
      .then(() => {
        return patent.getPatentDetails();
      })
      .then((details) => {
        assert.equal(details[6].toString(), 2, "Patent not in closed state");
      })

  });

  it("Should check uspto office, then do nothing since names dont match", function () {
    patent.confirmPatent({value: 100000})
      .catch((err) => {
        
      })
      .then(() => {
        return patent.getPatentDetails();
      })
      .then((details) => {
      })
    
  });


  it("Buyer should dispute claim", function () {

  });

  it("Mediator should side with buyer and refund balance", function () {

  });

});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}