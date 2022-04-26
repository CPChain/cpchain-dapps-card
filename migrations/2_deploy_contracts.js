// Deploy Example
var Card = artifacts.require("./Card.sol");

module.exports = function (deployer) {
    deployer.deploy(Card); //"参数在第二个变量携带"
};
