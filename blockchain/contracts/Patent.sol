pragma solidity ^0.4.11;

import "github.com/Arachnid/solidity-stringutils/strings.sol";
import "github.com/oraclize/ethereum-api/oraclizeAPI.sol"

contract Patent is usingOraclize {
    using strings for *;

    enum PatentStates { Closed, OpenForBidding, Escrow, Dispute}
    PatentStates public _state;
    PatentStates private constant _defaultstate = PatentStates.Closed;
    string public _patentNumber;
    string public _patentOwner;
    uint public _auctionEndTime;
    address public _owner;
    string public _patentDescription;
    string public _patentAbstract;
    string public _inventors;
    mapping(address => Bidder) _bidders;
    Bidder[] public _bidderList;
    uint  public _amountToPurchase;
    string public _oracleQuery;
    string private _xpath;
    uint public _highestBid;
    uint public _minimumBid;
    string public _patentUrl;
    Bidder public _winningBidder;

    struct Bidder {
        uint  amountContributed;
        string  name;
        address bidderAddress;
    }

    event PatentBid(address bidder, uint amount, uint date);
    event StateChange(address bidder, uint state, uint date);

    function Patent(string patentNumber, string description, string patentAbstract, string inventors, string url) {
        _state = _defaultstate;
        _patentNumber = patentNumber;
        _patentDescription = description;
        _patentAbstract = patentAbstract;
        _inventors = inventors;
        _patentUrl = url;
        _owner = tx.origin;
        var xpath = "/html/body/table[3]/tr[2]/td/table/tr[2]/td[1]/b/text())";
        strings.slice memory oracleQuery = "html(".toSlice();
        oracleQuery = oracleQuery.concat(url.toSlice()).toSlice();
        oracleQuery = oracleQuery.concat(").xpath(".toSlice()).toSlice();
        oracleQuery = oracleQuery.concat(xpath.toSlice()).toSlice();
        _oracleQuery = oracleQuery.toString();
        }

    function openBidding(uint duration, uint minimumBid) isOwner in_state(PatentStates.Closed) {
        _auctionEndTime = now + (duration * 1 days);
        _state = PatentStates.OpenForBidding;
        _minimumBid = minimumBid;

    }

    function registerForBidding(string name) in_state(PatentStates.OpenForBidding) {
        if(_bidders[msg.sender].bidderAddress != address(0)) throw;
        _bidders[msg.sender] = Bidder({name: name, bidderAddress: msg.sender, amountContributed: 0});
    }
    
    function closeBidding() isOwner in_state(PatentStates.OpenForBidding) {
        _state = PatentStates.Escrow;
    }
    
    // function getBalance() returns uint {
    //     return _bidders[msg.sender].amountContributed;
    // }
    
    function refundBid() {
        if(msg.sender == _winningBidder.bidderAddress) throw;
        if(_bidders[msg.sender].amountContributed == 0) throw;
        if(!_bidders[msg.sender].bidderAddress.send(_bidders[msg.sender].amountContributed)) throw;
        _bidders[msg.sender].amountContributed = 0;
    }

    function dispute() {
        _state = PatentStates.Dispute;
    }

    function confirmPatent() payable {
        oraclize_query('URL', _oracleQuery);
    }
    
    function __callback(bytes32 myid, string result) in_state(PatentStates.Escrow) {
        if (msg.sender != oraclize_cbAddress()) throw;
        _patentOwner = result;
        if(_winningBidder.name.toSlice().equals(result.toSlice())) {
            if (!_owner.send(_winningBidder.amountContributed)) throw;
        }
    }

    modifier in_state(PatentStates state) { 
        if (_state == state) _;
    }
    
    modifier isOwner {
        if(msg.sender == _owner) _;
    }

    modifier isBidder {
        if(_bidders[msg.sender].bidderAddress != address(0)) _;
    }

    function() payable isBidder in_state(PatentStates.OpenForBidding) {
        if(now >= _auctionEndTime) throw;
        _bidders[msg.sender].amountContributed += msg.value;
        if(_bidders[msg.sender].amountContributed > _winningBidder.amountContributed) {
            _winningBidder = _bidders[msg.sender];
        }
        _highestBid = _winningBidder.amountContributed;
    }
}