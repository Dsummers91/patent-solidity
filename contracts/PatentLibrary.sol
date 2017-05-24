pragma solidity ^0.4.4;

import "./Patent.sol";

contract PatentLibrary {
    mapping (string => address) _contracts;
    address public _owner;

    event patentCreated(address indexed creator, uint date, string patentID);

    function PatentLibrary() {
        _owner = tx.origin;        
    }

    function createPatent(string ID, string description) {
        address patent = new Patent(ID, description);
        _contracts[ID] = patent;
    }

    function getPatentById(string ID) returns(address patentAddress) {
        if(_contracts[ID] == uint80(0)) throw;
        return Patent(_contracts[ID]);
    }
}