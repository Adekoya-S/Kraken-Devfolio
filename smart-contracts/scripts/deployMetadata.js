// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const main = async () => {
  //Import contracts to deploy
  const KrakenMetadata = await hre.ethers.getContractFactory(
    "KrakenMetadata"
  );
  const krakenMetadata = await KrakenMetadata.deploy();
  await krakenMetadata.deployed();
  console.log('Kraken Metadata Contract deployed to:', krakenMetadata.address);


  // Kraken Metadata Contract deployed to: 0xA080918252C8826522aA95AddcA1A51eaA15E0d1
   
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();