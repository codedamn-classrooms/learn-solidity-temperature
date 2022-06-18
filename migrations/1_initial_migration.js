const temperature = artifacts.require("temperature");

module.exports = function (deployer) {
  deployer.deploy(temperature);
};
