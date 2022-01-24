require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// require("hardhat-gas-reporter");
// require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  etherscan:{
    apiKey:"B9NGPAH53B9EKG9E42HRG8QS5NM92DGHTZ"
  },
  networks: {
    // hardhat:{},
    bscTestnet:{
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: ["0c789be015c5c97a686d5c6fda1260b3bc8a55d9dcdfe1835416546a034aa652"]
    },
    rinkeby:{
      url: 'https://eth-rinkeby.alchemyapi.io/v2/wrhbzNO0w7cwWL_0wZi-Z4zCgNyDLuR4',
      accounts: ["0c789be015c5c97a686d5c6fda1260b3bc8a55d9dcdfe1835416546a034aa652"]
    }

  }
};
