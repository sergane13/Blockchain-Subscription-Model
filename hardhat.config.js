require("@nomiclabs/hardhat-waffle");

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
  solidity: "0.8.11",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/3e7a4ea8738f4a3d9810ee95db1ab23f",
      accounts: ["3fd132e55928d621cf19dea14637ea847469f0c54f32c3c45cb5bf312d19dbe1"]
    }
  }
};
