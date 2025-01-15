# Deploy Uniswap V2 to Moonbase Alpha (or Standalone node)

This is a Hardhat setup to deploy the necessary contracts of Uniswap.

## Get Started

Clone repo:

```
git clone https://github.com/albertov19/uniswap-contracts-moonbeam/
cd uniswap-contracts-moonbeam
```

Install packages:

```
npm i
```

Modify the private keys as you wish in the `hardhat.config.js` file.

### Deploy the contracts (Standalone)

To deploy the contracts in a Standalone node you can run:

```
npx hardhat run --network dev scripts/deploy-uniswap.js
```

Contracts will be deployed if a Standalone node is running (default 9933 port is used).

**Note: the interface will only work if the contracts are deployed in a fresh instance. As contacts addressess are saved so that they match that order of deployment**

### Deploy the contracts (Moonbase Alpha):

To deploy the contracts in Moonbase Alpha you can run:

```
npx hardhat run --network monad scripts/deploy-factory.js
```

**Note: the interface works on Moonbase Alpha with the contracts address baked in the SDK. To make sure that the interface works with your deployment you need to modify both the Interface and SDK repos**

--sepolia
Deploying contracts using 0xA41b53c022270CEAEE689f41A6E51ff96574d9cA
WETH deployed to : 0x788325f1d4609fc025d6d34BFf8fC8ceF43ab504
Factory deployed to : 0x262273590E90aFc499552383e05F2202F12d33D9
Router V02 deployed to : 0x00056e78205D2E6E0D578F93e79044b011Cf086f
Multicall deployed to : 0x4709A64ccDB2C2154268801Dd61427794b2A853A
AAA : 0x8D4fAA2b18D9B7d757CfdB7BB822C45BD43836f1
BBB: 0x93A1D6fdd93994e11e30363e1EB767DCb7B44e19

--monad
Deploying contracts using 0xA41b53c022270CEAEE689f41A6E51ff96574d9cA
WETH deployed to : 0x0006E0882d2c9307007c5Bf6D062AC052BA5aB01
Factory deployed to : 0x744241c24531e43B2F1AbcCC6e49cFc104f51616
Router V02 deployed to : 0x2507280BAF22ef7E2Bb3F6568EE6fe50b3B1dD3E
Multicall deployed to : 0x9CB7016E6aa001Ce6A40628D71A979a64b851732
AAA deployed to : 0x83B8e5ADa82aEDFf7ecD8015a2e9706a35f49eEa
BBB deployed to : 0x83B8e5ADa82aEDFf7ecD8015a2e9706a35f49eEa
