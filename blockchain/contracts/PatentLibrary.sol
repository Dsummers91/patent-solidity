pragma solidity ^0.4.11;

import "./Patent.sol";

contract PatentLibrary {
  mapping (int32 => address) contracts;
  address public owner;
  uint y = 344456475;

  event patentCreated(address indexed creator, uint date, int32 patentID, bytes patentAbstract, address patentAddress);

  function PatentLibrary() {
    owner = tx.origin;
  }

  function createPatent(int32 patentNumber, bytes patentAbstract, bytes32 inventors, string url) {
    require(contracts[patentNumber] == address(0));
    address patent = new Patent(patentNumber, patentAbstract, inventors, url);
    patentCreated(msg.sender, now, patentNumber, patentAbstract, patent);
    contracts[patentNumber] = patent;
  }

  function getPatentByID(int32 ID) constant returns(address patentAddress) {
    return Patent(contracts[ID]);
  }
}