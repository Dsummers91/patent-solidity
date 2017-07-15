var PatentLibrary = artifacts.require("./PatentLibrary.sol");
var Patent = artifacts.require("./Patent.sol");

module.exports = function(deployer) {
  deployer.deploy(PatentLibrary);
  // deployer.deploy(Patent, 23, "description", ,"test", "test");
};
