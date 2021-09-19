//require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
//import('hardhat/config').HardhatUserConfig;
//const {API_URL,PRIVATE_KEY} = process.env;

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
  defaultNetwork: "rinkeby",
  networks : {
    hardhat : {},
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/sPEPghu8Pt8jZzhlI1jiq3rJKQR7Ze5p",
      accounts: ["745269b64806acfc5e5e7a5ab013bed7bb87182dca3cb22d8a5eecac728c0121"]
    }
  },
};
