var UzairCoin = artifacts.require("./UzairCoin.sol");

module.exports = function(deployer) {
    // Demo is the contract's name
    deployer.deploy(UzairCoin);
};