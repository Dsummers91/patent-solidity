pragma solidity ^0.4.11;

import "./Patent.sol";

contract PatentLibrary {
    mapping (string => address) _contracts;
    address public _owner;

    event patentCreated(address indexed creator, uint date, string patentID);

    function PatentLibrary() {
        _owner = tx.origin;        
    }

    function createPatent(string patentNumber, string description, string patentAbstract, []string inventors, string url) {
        url = url;
        if(_contracts[ID] != address(0)) throw;
        address patent = new Patent(ID, description, patentAbstract, inventors, url);
        patentCreated(tx.origin, now, ID);
        _contracts[ID] = patent;
    }

    function getPatentById(string ID) returns(address patentAddress) {
        return Patent(_contracts[ID]);
    }
}