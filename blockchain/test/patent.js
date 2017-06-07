var Patent = artifacts.require("./Patent.sol");

contract('Patent', function(accounts) {
  it("Patent owner should be ", function() {
    return Patent.deployed().then(function(instance) {
      instance._patentOwner.call((err, res) => {
        assert.equal(res, accounts[0], "test");
      });
    });
  });  
  it("It's ID should be 23 ", function() {
    return Patent.deployed().then(function(instance) {
      instance._patentID.call((err, res) => {
        assert.equal(res, "23", "should equal 23");
      });
    });
  });
});
