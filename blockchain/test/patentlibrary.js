var PatentLibrary = artifacts.require("./PatentLibrary.sol");

contract('PatentLibrary', function(accounts) {
  xit("PatentLibrary owner should be ", function() {
    return PatentLibrary.deployed().then(function(instance) {
      instance.owner.call((err, res) => {
        assert.equal(res, accounts[0], "test");
      });
    });
  });
});
