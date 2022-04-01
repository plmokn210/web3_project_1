require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/HvOQEppk2xp-SCGmTB0hCHm6JrQOk5Xg",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
