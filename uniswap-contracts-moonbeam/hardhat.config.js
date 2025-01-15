/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

// Change private keys accordingly - ONLY FOR DEMOSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
// Export your private key as
//       export PRIVKEY=0x.....
const privateKey = process.env.PRIVKEY;
const privateKeyDev =
  "0x99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342";

module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {},

    moonbase: {
      url: "https://rpc.api.moonbase.moonbeam.network",
      accounts: [privateKey],
      chainId: 1287,
    },
    monad: {
      url: "https://rpc-devnet.monadinfra.com/rpc/3fe540e310bbb6ef0b9f16cd23073b0a",
      accounts: [privateKey],
      chainId: 20143,
    },
    sepolia: {
      url: "https://eth-sepolia.public.blastapi.io",
      accounts: [privateKey],
      chainId: 11155111,
    },
    dev: {
      url: "http://127.0.0.1:9933",
      accounts: [privateKeyDev],
      network_id: "1281",
      chainId: 1281,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      moonbaseAlpha: "key_here", // Moonbeam Moonscan API Key
    },
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
