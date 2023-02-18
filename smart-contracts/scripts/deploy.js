// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  //Import contracts to deploy
  const KrakenDomainFactory = await hre.ethers.getContractFactory(
    "KrakenDomainFactoryV2"
  );

  const krakenDomainSBTFactory = await hre.ethers.getContractFactory(
    "KrakenDomainSBTFactory"
  );

  const KrakenDomainHub = await hre.ethers.getContractFactory(
    "KrakenDomainHub"
  );

  const KrakenDomainResolver = await hre.ethers.getContractFactory(
    "KrakenDomainResolver"
  );

  const KrakenSBTDomainResolver = await hre.ethers.getContractFactory(
    "KrakenSBTDomainResolver"
  );

  const ForbiddenTlds = await hre.ethers.getContractFactory("ForbiddenTldsV2");

  const metadataAddress = "0x652182af1c9114d6D01CceA127cc3EaFebCCFD9F";

  const royaltyAddress = "0xaF93083C3c81e7070c520bfe72CD0B96FA916cd0";

  const krakenHub = await KrakenDomainHub.deploy(metadataAddress);
  await krakenHub.deployed();
  const hubAddress = krakenHub.address;

  const krakenResolver = await upgrades.deployProxy(KrakenDomainResolver);
  const domainSbtResolver = await upgrades.deployProxy(KrakenSBTDomainResolver);
  await krakenResolver.deployed();
  await domainSbtResolver.deployed();
  const resolverAddress = krakenResolver.address;
  const domainSbtResolverAddress = domainSbtResolver.address;
  console.log("resolver Address:", resolverAddress);
  console.log("domain Sbt resolver address:", domainSbtResolverAddress);

  await krakenResolver.addHubAddress(hubAddress, { gasLimit: 1000000 });
  await domainSbtResolver.addHubAddress(hubAddress, { gasLimit: 1000000 });

  const forbiddenTlds = await ForbiddenTlds.deploy(hubAddress);
  await forbiddenTlds.deployed();
  const forbiddenTldsAddress = forbiddenTlds.address;

  const krakenFactory = await KrakenDomainFactory.deploy(
    0,
    forbiddenTldsAddress,
    metadataAddress,
    hubAddress,
    royaltyAddress
  );
  await krakenFactory.deployed();
  const factoryAddress = krakenFactory.address;

  await krakenResolver.addFactoryAddress(factoryAddress);

  await forbiddenTlds.addFactoryAddress(factoryAddress);

  const init = await krakenHub.init(
    krakenFactory.address,
    forbiddenTldsAddress
  );
  await init.wait();

  const toogle = await krakenFactory.toggleBuyingTlds();
  await toogle.wait();

  console.log("krakenDomainHub deployed to: ", hubAddress);
  console.log("krakenDomainFactory deployed to: ", factoryAddress);
  console.log("forbiddenTlds deployed to: ", forbiddenTldsAddress);

  const krakenSBTFactory = await krakenDomainSBTFactory.deploy(
    0,
    forbiddenTldsAddress,
    metadataAddress,
    hubAddress,
    royaltyAddress
  );
  await krakenSBTFactory.deployed();
  const sbtFactoryAddress = krakenSBTFactory.address;
  await domainSbtResolver.addFactoryAddress(sbtFactoryAddress);

  console.log("krakenDomainSBTFactory deployed to: ", sbtFactoryAddress);

  await forbiddenTlds.addFactoryAddress(sbtFactoryAddress);

  const sbtInit = await krakenHub.initSBT(krakenSBTFactory.address);
  await sbtInit.wait();

  const sbtToogle = await krakenSBTFactory.toggleBuyingTlds();
  await sbtToogle.wait();

  

  // KRAKEN
  //   resolver Address: 0xe86A19449566bA2Eb7CD2b3AF37940b47594AeFb
  // domain Sbt resolver address: 0xc342309d006986f0726efcF93E742B4aC00CF36a
  // krakenDomainHub deployed to:  0xf19f63e1Aea55a3ad1a347Aac187A9F9c33E566b
  // krakenDomainFactory deployed to:  0xda6b395DCFE768362e9c15a99D44aC75a9E3c6bf
  // forbiddenTlds deployed to:  0x2281A740b5766f140391536BA39C5dc1DBfBecb6
  // krakenDomainSBTFactory deployed to:  0xE2e1C3eEF3E07b5969bd1a9b97B23e7BE715d4E4
  // Kraken Metadata Contract deployed to: 0x652182af1c9114d6D01CceA127cc3EaFebCCFD9F
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
