const MaticPOSClient = require("@maticnetwork/maticjs").MaticPOSClient;
const config = require("./config");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const getMaticPOSClient = () => {
  return new MaticPOSClient({
    network: "mainnet", // For testnet change this to testnet
    version: "v1", // For testnet change this to mumbai
    parentProvider: new HDWalletProvider(
      config.user.privateKey,
      config.root.RPC
    ),
    maticProvider: new HDWalletProvider(
      config.user.privateKey,
      config.child.RPC
    ),
    parentDefaultOptions: { from: config.user.address }, // optional, can also be sent as last param while sending tx
    maticDefaultOptions: { from: config.user.address }, // optional, can also be sent as last param while sending tx
  });
};

module.exports = {
  getMaticPOSClient,
};
