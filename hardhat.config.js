require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
const mnemonic = '{{mnemonic}}';

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    thaichain: {
        url: 'https://rpc.tch.in.th',
        chainId: 7,
        gasPrice: 20*1e9,
        accounts: {mnemonic: mnemonic}
    },
    bitkub: {
        url: 'https://rpc.bitkubchain.io',
        chainId: 96,
        gasPrice: 50*1e9,
        accounts: {mnemonic: mnemonic}
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20*1e9,
      accounts: {mnemonic: mnemonic}
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 5*1e9,
      accounts: {mnemonic: mnemonic}
    }
  },
  solidity: {
  version: "0.5.16",
  settings: {
    optimizer: {
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};