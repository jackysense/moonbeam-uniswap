const { ethers } = require("hardhat");

// Deploy function
async function deploy() {
  [account] = await ethers.getSigners();
  deployerAddress = account.address;
  console.log(`Deploying contracts using ${deployerAddress}`);

  //Deploy WETH
  const weth = await ethers.getContractFactory("WETH");
  const wethInstance = await weth.deploy();
  await wethInstance.deployed();

  console.log(`WETH deployed to : ${wethInstance.address}`);

  //Deploy Factory
  const factory = await ethers.getContractFactory("UniswapV2Factory");
  const factoryInstance = await factory.deploy(deployerAddress);
  await factoryInstance.deployed();

  console.log(`Factory deployed to : ${factoryInstance.address}`);

  //Deploy Router passing Factory Address and WETH Address
  const router = await ethers.getContractFactory("UniswapV2Router02");
  const routerInstance = await router.deploy(
    factoryInstance.address,
    wethInstance.address
  );
  await routerInstance.deployed();

  console.log(`Router V02 deployed to :  ${routerInstance.address}`);

  //Deploy Multicall (needed for Interface)
  const multicall = await ethers.getContractFactory("Multicall");
  const multicallInstance = await multicall.deploy();
  await multicallInstance.deployed();

  console.log(`Multicall deployed to : ${multicallInstance.address}`);

  //Deploy Token AAA (needed for Interface)
  const AAA = await ethers.getContractFactory("Token");
  const AAAInstance = await AAA.deploy("AIOS", "AIOS");
  await AAAInstance.deployed();

  console.log(`AAA deployed to : ${AAAInstance.address}`);

  //Deploy Token BBB (needed for Interface)
  const BBB = await ethers.getContractFactory("Token");
  const BBBInstance = await BBB.deploy("ONDO", "ONDO");
  await BBBInstance.deployed();

  console.log(`BBB deployed to : ${AAAInstance.address}`);
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
