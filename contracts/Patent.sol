pragma solidity ^0.4.4;

contract Patent {
    string public _patentID;
    address public _patentOwner;
    string public _patentDescription;
    mapping(address => uint) _amountContributed;
    bool  public _forSale;
    uint  public _amountToPurchase;
    int public _contractState;

    function Patent (string ID, string description) {
        _patentID = ID;
        _patentOwner = tx.origin;
        _patentDescription = description;
    }

    function bidPatent() {
         if(msg.value < _amountToPurchase) throw;
         _contractState = 2; // Contract in escrow
    }

    function transferOwnership(address toAddress) isPatentOwner {
        _patentOwner = toAddress;
        _contractState = 0;
    }

    modifier isPatentOwner() {
        if(msg.sender == _patentOwner) _;
    }
    
    modifier isBeingSold() {
        if(_forSale) _;
    }
    function() payable {
        _amountContributed[msg.sender] += msg.value;
    }

    function __callback() {

    }

    function confirmPatent() {
        //Oracle call to determine if patent  belongs to owner on USPTO office
    }
}