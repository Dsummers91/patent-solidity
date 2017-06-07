import * as web3 from "web3";
import { environment } from "environments/environment";

declare var window: any;

const PatentLibraryContractABI = [{"constant":false,"inputs":[{"name":"ID","type":"string"}],"name":"getPatentById","outputs":[{"name":"patentAddress","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ID","type":"string"},{"name":"description","type":"string"},{"name":"url","type":"string"}],"name":"createPatent","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"_owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"date","type":"uint256"},{"indexed":false,"name":"patentID","type":"string"}],"name":"patentCreated","type":"event"}];

const PatentContractABI = [{"constant":true,"inputs":[],"name":"_forSale","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"}],"name":"__callback","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"},{"name":"proof","type":"bytes"}],"name":"__callback","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"_patentOwner","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"_amountToPurchase","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"_oracleQuery","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"_patentDescription","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"confirmPatent","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"_contractState","outputs":[{"name":"","type":"int256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"_patentID","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"bidPatent","outputs":[],"payable":true,"type":"function"},{"inputs":[{"name":"ID","type":"string"},{"name":"description","type":"string"},{"name":"url","type":"string"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}];

export function getContract(web3) {
  return  web3.eth.contract(PatentLibraryContractABI).at("0x9e9faff9c48992fb52e2261afcf179faa16eebc8")
}


export function getPatent(web3, id) {
  return  web3.eth.contract(PatentContractABI).at(id)
}