const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const access = await hre.ethers.getContractFactory("Access");
  const payment = await hre.ethers.getContractFactory("Payment");
  
  const accessContract = await access.deploy();

  await accessContract.deployed();

  const paymentContract = await payment.deploy(accessContract.address);

  await paymentContract.deployed();

  console.log("Access contract deployed at " + accessContract.address);
  console.log("Payment contract deployed at " + paymentContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
