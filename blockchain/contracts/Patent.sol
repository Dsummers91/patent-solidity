pragma solidity ^0.4.11;

import "solidity-stringutils/strings.sol";
import "oraclize/contracts/usingOraclize.sol";

contract Patent is usingOraclize {
  using strings for *;

  enum PatentStates { Closed, OpenForBidding, Escrow, Dispute}
  PatentStates private constant defaultstate = PatentStates.Closed;
    
  PatentStates public state;          // Current State of the Contract
  uint         public auctionEndTime; // Time to accept bids. (In production use blocknumber)
  address      public owner;          // Current owner of the patent
  address      public mediator;       // Address of the mediator in case of dispute
  PatentItem   public patent;
  address      public winningBidder;  // Current Highest Bidder
  mapping(address => bytes32) public names; // Mapping of addresses to name

  struct PatentItem {
    bytes32 assignee;     // Current Assignee of Patent (Set by Oracle)
    int32 patentNumber;   // Number of Patent
    bytes32 inventors;
    bytes patentAbstract;
    string url;           // Url of USPTO document for oracle calls
  }

  event PatentBid(address bidder, uint amount, uint date);
  event StateChange(uint state, uint date);

  function Patent(
    int32 patentNumber,
    bytes patentAbstract,
    bytes32 inventors,
    string url
  ) {
    OAR = OraclizeAddrResolverI(0x6f485c8bf6fc43ea212e93bbf8ce046c7f1cb475);  // used for local oracle development
    state = defaultstate; // State will initially be Closed
    patent.patentNumber = patentNumber;
    patent.patentAbstract = patentAbstract;
    patent.inventors = inventors;
    patent.url = url;
    owner = tx.origin;
    mediator = tx.origin;  // Will most likely be a neutral third party DAO who reaps rewards for mediating
  }


  /**
  *   Opens the contract to accepts bid
  *   Only the owner is able to call this method, when the Patent state is closes
  *   @param duration The amount of time in seconds that the auction period will last
  *   TODO: We would want to use block numbers instead of time in any real environment
  **/
  function openBidding(uint duration) isOwner inState(PatentStates.Closed) {
    auctionEndTime = now + (duration * 1 seconds); // Change to block number in production
    state = PatentStates.OpenForBidding;    
  }

  
  /** 
  *   Ends Bidding stage for Patent once duration has ended 
  *   Anyone is able to end an auction
  **/
  function closeBidding() inState(PatentStates.OpenForBidding) {
    require(now > auctionEndTime);
    state = PatentStates.Escrow;
  }

  /**
  *   Correlates a user Public Key to a name to assign towards USPTO
  *   @param name Name will be what the seller would change name to if buyer wins
  **/
  function register(bytes32 name) inState(PatentStates.OpenForBidding) {
    names[msg.sender] = name;
  }



  /**
  *   This method will kick off an oracle call to USPTO office
  *   __callback function will kick off with the results of the call
  **/
  function confirmPatent() payable {
    uint valueBeforeCall = this.balance;
    oraclize_query('URL', generateOracleRequest());
    // Since Oracle calls cost gas, the cost of taken from this contract
    // This will make sure the contract doesnt get deplete by anyone who may do massice amounst of calls
    // Sender must send adequest ether so contract will have ether leftover after the call
    // TODO: send back whatever is leftover?
    if(msg.value < (valueBeforeCall - this.balance)) throw; 
  }
 
  /**
  *   In the event of malicious activity the buyer or seller can dispute a claim
  *   i.e. If a seller does not down actually own the patent in question
  *     or does not transfer rights to buyer
  **/
  function dispute() inState(PatentStates.Escrow) isBuyerOrSeller {
    state = PatentStates.Dispute;
  }

  /**
  *   Nullifies the auction, only callable by mediator
  **/
  function mediatorNullifyAuction() inState(PatentStates.Dispute) isMediator {
    nullifyAuction();
  }
  
  /**
  *   Approves the auction, only callable by mediator
  **/
  function mediatorApproveAuction() inState(PatentStates.Dispute) isMediator {
    approveAuction();
  }

  /**
  *   Approves the auction, only callable bywinning bidder
  **/
  function bidderApproveAuction() isWinningBidder inState(PatentStates.Escrow) {
    approveAuction();
  }


  /**
  *   Callback function return from the oraclize query
  *   If name matches the value that a bidder registered as in the bidding perions,
  *   Auction will be approved autonomously
  **/
  function __callback(bytes32 myid, string result) {
    if (msg.sender != oraclize_cbAddress()) throw;
    patent.assignee = stringToBytes32(result);
    bytes32 name = names[winningBidder];
    if(name == patent.assignee) {
      approveAuction();
    }
  }

  /**
  *   Unnamed function that is called when ether is sent to contract, 
  *   Can only send when in the bidding phase
  *   Bid must be higher than the current high bid
  *   Returns previous bidders funds back to them, and set new bidder as current winner
  **/
  function() payable inState(PatentStates.OpenForBidding) {
    uint valueBeforeSend = this.balance - msg.value;
    require((now <= auctionEndTime) && (auctionEndTime != 0));
    require(msg.value > valueBeforeSend);
    if(winningBidder != address(0)) winningBidder.transfer(valueBeforeSend);
    winningBidder = msg.sender;
  }

  /** MODIFIER METHODS **/

  modifier isMediator {
    if(msg.sender != mediator) throw;
    _;
  }

  /**
  *   Makes the function only callable if contract is in a certain state
  *   i.e: In Bidding Phase
  **/
  modifier inState(PatentStates _state) { 
    if (state != _state) throw;
    _;
  }
  
  modifier isOwner {
    if(msg.sender != owner) throw;
    _;
  }

  modifier isBuyerOrSeller {
    if((msg.sender == owner) || (msg.sender == winningBidder)) _;
    throw;
  }

  modifier isWinningBidder {
    if(msg.sender != winningBidder) throw;
    _;
  }
  
  /** GETTER METHODS **/


  /**
  * Returns necessary Information of this patent
  **/
  function getPatentDetails() constant returns (
    int32 patentNumber, 
    bytes patentAbstract, 
    bytes32 inventors, 
    bytes url,
    bytes32 assignee,
    address owner,
    uint patentState
  ) {
    url = bytes(patent.url);
    patentState = uint(state);
    return (patent.patentNumber, patent.patentAbstract, patent.inventors, url, patent.assignee, owner, patentState);
  }


  /**
  *   Returns the name that the sender of the message registered in the bidding phase
  **/
  function getName() constant returns(bytes32) {
    return names[msg.sender];
  }

  /*** INTERNAL METHODS ***/

  /**
  * Converts string to byte32
  * https://ethereum.stackexchange.com/questions/9142/how-to-convert-a-string-to-bytes32
  * @return bytes32
  **/
  function stringToBytes32(string memory source) internal returns (bytes32 result) {
      assembly {
          result := mload(add(source, 32))
      }
  }

  /**
  *   Called once auction has completed successfully
  *   Sends Escrowed funds to seller, and sets the buyer as the owner of the contract
  **/
  function approveAuction() internal returns (bool success) {
    owner.transfer(this.balance);
    state = defaultstate;
    owner = winningBidder;
    delete winningBidder;
    return true;
  }

  /**
  *   Called when a mediator nullifies an auctions results
  *   Returns funds backs to bidder
  **/
  function nullifyAuction() returns (bool success) {
    winningBidder.transfer(this.balance);
    state = defaultstate;
    delete winningBidder;
    return true;
  }

  /**
  *   Creates the query to use for the oracle call to grab USPTO asignee
  *   @return string
  **/
  function generateOracleRequest() internal returns(string) {
    string memory xpath = "/html/body/table[3]/tr[2]/td/table/tr[2]/td[1]/b/text())";
    strings.slice memory oracleQuery = "html(".toSlice();
    oracleQuery = oracleQuery.concat(patent.url.toSlice()).toSlice();
    oracleQuery = oracleQuery.concat(").xpath(".toSlice()).toSlice();
    oracleQuery = oracleQuery.concat(xpath.toSlice()).toSlice();
    return oracleQuery.toString();
  }
}