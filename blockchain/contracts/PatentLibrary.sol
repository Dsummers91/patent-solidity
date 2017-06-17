pragma solidity ^0.4.11;

import "./Patent.sol";

contract PatentLibrary {
    mapping (string => address) _contracts;
    address public _owner;

    string public test = "s";

    event patentCreated(address indexed creator, uint date, string patentID, string patentAbstract, address patentAddress);

    function PatentLibrary() {
        _owner = tx.origin;        
    }

    function createPatent(string patentNumber, string description, string patentAbstract, string inventors, string url) {
        if(_contracts[patentNumber] != address(0)) throw;
        address patent = new Patent(patentNumber, description, patentAbstract, inventors, url);
        patentCreated(tx.origin, now, patentNumber, patentAbstract, patent);
        _contracts[patentNumber] = patent;
    }

    function getPatentById(string ID) returns(address patentAddress) {
        return Patent(_contracts[ID]);
    }
}