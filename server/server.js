var http = require('http');
var app = require('express')();
var Web3 = require('web3');
var web3 = new Web3();
var cors = require('cors')

const PatentLibraryContractABI = [{ "constant": false, "inputs": [{ "name": "ID", "type": "string" }], "name": "getPatentById", "outputs": [{ "name": "patentAddress", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "ID", "type": "string" }, { "name": "description", "type": "string" }, { "name": "url", "type": "string" }], "name": "createPatent", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "_owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "creator", "type": "address" }, { "indexed": false, "name": "date", "type": "uint256" }, { "indexed": false, "name": "patentID", "type": "string" }], "name": "patentCreated", "type": "event" }];

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

let pl = web3.eth.contract(PatentLibraryContractABI).at("0x4ac1fc7bf50a7e7437b1eb1f0dc979efe4784a84")
var lastBlock;
let patents = [];
setInterval((() => {
  lastBlock = lastBlock || 0;
  var events = pl.patentCreated({}, { fromBlock: lastBlock, toBlock: web3.eth.blockNumber })
  events.get((error, result) => {
    result.map((res) => {
      patents.push(res.args);
    })
  });
  lastBlock = web3.eth.blockNumber;
}).bind(this), 5000);

app.use(cors())


app.get("/patent", (req,res) => {
  patent = require('../blockchain/build/contracts/Patent.json')
  res.send(patent);
})

app.get("/patentlibrary", (req,res) => {
  patent = require('../blockchain/build/contracts/PatentLibrary.json')
  res.send(patent);
})

app.listen(8000, (err, res) => {
  console.log('app listening on 8000');
})