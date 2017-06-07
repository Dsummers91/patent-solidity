var PatentLibrary = artifacts.require("./PatentLibrary.sol");

contract('PatentLibrary', function(accounts) {
  it("PatentLibrary owner should be ", function() {
    return PatentLibrary.deployed().then(function(instance) {
      instance._patentLibraryOwner.call((err, res) => {
        assert.equal(res, accounts[0], "test");
      });
    });
  });
});
