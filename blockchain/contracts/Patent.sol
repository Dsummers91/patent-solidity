pragma solidity ^0.4.4;

import "../ethereum-api/oraclizeAPI.sol";
import "./strings.sol";

contract Patent is usingOraclize {
    using strings for *;

    enum PatentStates { Closed, OpenForBidding, FinishedBidding, Escrow, Dispute}
    PatentStates _state
    string public _patentNumber;
    string public _patentOwner;
    string public _patentDescription;
    string public _patentAbstract;
    string public _inventors;
    mapping(address => Bidder) _bidders;
    uint  public _amountToPurchase;
    string public _oracleQuery;
    string private _xpath;

    struct Bidder {
        string  amountContributed
        string  name
        address address
    }

    event PatentBid(address bidder, uint amount, uint date)
    event StateChange(address bidder, uint state, uint date)

    function Patent (string patentNumber, string description, string patentAbstract, []string inventors, string url) {
        OAR = OraclizeAddrResolverI(0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475);
        _patentNumber = patentNumber;
        _patentDescription = description;
        _patentAbstract = patentAbstract;
        _inventors = inventors;
        _owner = tx.origin;
        var xpath = "/html/body/table[3]/tr[2]/td/table/tr[2]/td[1]/b/text())";
        strings.slice memory oracleQuery = "html(".toSlice();
        oracleQuery = oracleQuery.concat(url.toSlice()).toSlice();
        oracleQuery = oracleQuery.concat(").xpath(".toSlice()).toSlice();
        oracleQuery = oracleQuery.concat(xpath.toSlice()).toSlice();
        _oracleQuery = oracleQuery.toString();
        }

    function bidPatent() payable, in_state(State.OpenForBidding) {
         if(msg.value < _amountToPurchase) throw;
    }

    function openForBidding() isOwner {

    }

    function __callback(bytes32 myid, string result) {
        if (msg.sender != oraclize_cbAddress()) throw;
        _patentOwner = result;
    }

    modifier in_state(State state) { 
        if (state == _state) _;
    }


    
    modifier isBeingSold() {
        if(_state == state.OpenForBidding) _;
    }
    
    modifier isOwner() {
        if(msg.sender == _owner) _;
    }
    function() payable {
        _bidders[msg.sender].amountContributed += msg.value;
    }

    function confirmPatent() payable {
        oraclize_query('URL', _oracleQuery);
    }
}