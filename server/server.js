var http = require('http');
var app = require('express')();
var Web3 = require('web3');
var web3 = new Web3();

const PatentLibraryContractABI = [{ "constant": false, "inputs": [{ "name": "ID", "type": "string" }], "name": "getPatentById", "outputs": [{ "name": "patentAddress", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "ID", "type": "string" }, { "name": "description", "type": "string" }, { "name": "url", "type": "string" }], "name": "createPatent", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "_owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "creator", "type": "address" }, { "indexed": false, "name": "date", "type": "uint256" }, { "indexed": false, "name": "patentID", "type": "string" }], "name": "patentCreated", "type": "event" }];

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

let pl = web3.eth.contract(PatentLibraryContractABI).at("0x9e9faff9c48992fb52e2261afcf179faa16eebc8")
var lastBlock;
let patents = [];
setInterval((() => {
  lastBlock = lastBlock || 0;
  var events = pl.patentCreated({}, { fromBlock: lastBlock, toBlock: web3.eth.blockNumber })
  console.log(lastBlock);
  events.get((error, result) => {
    result.map((res) => {
      patents.push(res.args);
    })
  });
  console.log(lastBlock);
  lastBlock = web3.eth.blockNumber;
}).bind(this), 5000);

app.listen(8000, (err, res) => {
  console.log('app listening on 8000');
})