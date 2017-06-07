var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var PatentLibrary = artifacts.require("./PatentLibrary.sol");
var Patent = artifacts.require("./Patent.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(PatentLibrary);
  deployer.deploy(Patent, "23", "description", "test" ,"test", "test");
};
