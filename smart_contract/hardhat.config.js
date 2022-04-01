//https://eth-ropsten.alchemyapi.io/v2/HvOQEppk2xp-SCGmTB0hCHm6JrQOk5Xg
require("dotenv").config();

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/HvOQEppk2xp-SCGmTB0hCHm6JrQOk5Xg",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};