pragma solidity ^0.4.11;

import "./strings.sol";
import "../ethereum-api/oraclizeAPI.sol";

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
    string public _oracleQuery;
    string private _xpath;
    uint public _highestBid;
    uint public _minimumBid;
    string public _patentUrl;
    Bidder public _winningBidder;
    address public _mediator;

    struct Bidder {
        uint  amountContributed;
        string  name;
        address bidderAddress;
    }

    event PatentBid(address bidder, uint amount, uint date);
    event StateChange(address bidder, uint state, uint date);

    function Patent(string patentNumber, string description, string patentAbstract, string inventors, string url) {
        OAR = OraclizeAddrResolverI(0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475);
        _state = _defaultstate;
        _patentNumber = patentNumber;
        _patentDescription = description;
        _patentAbstract = patentAbstract;
        _inventors = inventors;
        _patentUrl = url;
        _owner = tx.origin;
        _mediator = tx.origin;
        var xpath = "/html/body/table[3]/tr[2]/td/table/tr[2]/td[1]/b/text())";
        strings.slice memory oracleQuery = "html(".toSlice();
        oracleQuery = oracleQuery.concat(url.toSlice()).toSlice();
        oracleQuery = oracleQuery.concat(").xpath(".toSlice()).toSlice();
        oracleQuery = oracleQuery.concat(xpath.toSlice()).toSlice();
        _oracleQuery = oracleQuery.toString();
        }

    function openBidding(uint duration, uint minimumBid) isOwner inState(PatentStates.Closed) {
        _auctionEndTime = now + (duration * 1 days);
        _state = PatentStates.OpenForBidding;
        _minimumBid = minimumBid;
    }

    function registerForBidding(string name) inState(PatentStates.OpenForBidding) {
        _bidders[msg.sender].name = name;
        _bidders[msg.sender].bidderAddress = msg.sender;
    }
    
    function closeBidding() isOwner inState(PatentStates.OpenForBidding) {
        _state = PatentStates.Escrow;
    }
    
    function refundBid() {
        if(msg.sender == _winningBidder.bidderAddress) throw;
        if(_bidders[msg.sender].amountContributed == 0) throw;
        if(!_bidders[msg.sender].bidderAddress.send(_bidders[msg.sender].amountContributed)) throw;
        _bidders[msg.sender].amountContributed = 0;
        _bidders[msg.sender].bidderAddress = msg.sender;
    }

    function dispute() {
        _state = PatentStates.Dispute;
    }

    function confirmPatent() payable {
        uint valueBeforeCall = this.balance;
        oraclize_query('URL', _oracleQuery);
        if(msg.value < (valueBeforeCall - this.balance)) throw; 
    }
    
    function nullifyContract() inState(PatentStates.Dispute) {
        delete _winningBidder;
        _state = PatentStates.Closed;
    }
    
    function approveContract() inState(PatentStates.Dispute) {
        if (!_owner.send(_winningBidder.amountContributed)) throw;
        _state = _defaultstate;
        _owner = _winningBidder.bidderAddress;
        delete _winningBidder;
    }

    function bidderApproveContract() isWinningBidder inState(PatentStates.Escrow) {
        if (!_owner.send(_winningBidder.amountContributed)) throw;
        _state = _defaultstate;
        _owner = _winningBidder.bidderAddress;
        delete _winningBidder;
    }

    function __callback(bytes32 myid, string result) inState(PatentStates.Escrow) {
        if (msg.sender != oraclize_cbAddress()) throw;
        _patentOwner = _winningBidder.name;
        _patentAbstract = result;
        _inventors = "changed";
        if(_winningBidder.name.toSlice().equals(result.toSlice())) {
            if (!_owner.send(_winningBidder.amountContributed)) throw;
            _state = _defaultstate;
            _owner = _winningBidder.bidderAddress;
            delete _winningBidder;
        }
    }

    modifier isMediator {
        if(msg.sender == _mediator) _;
    }

    modifier inState(PatentStates state) { 
        if (_state == state) _;
    }
    
    modifier isOwner {
        if(msg.sender == _owner) _;
    }

    modifier isWinningBidder {
        if(_winningBidder.bidderAddress == msg.sender) _;
    }

    function() payable {
        if(now >= _auctionEndTime) throw;
        if (_state != PatentStates.OpenForBidding) throw;
        _bidders[msg.sender].amountContributed += msg.value;
        if(_bidders[msg.sender].amountContributed > _winningBidder.amountContributed) {
            _winningBidder = _bidders[msg.sender];
        }
        _highestBid = _winningBidder.amountContributed;
    }
}