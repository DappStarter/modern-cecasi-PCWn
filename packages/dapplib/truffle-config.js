require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue random night history inflict end army genre'; 
let testAccounts = [
"0x08d3bf0ec64f7fa2d27f3db5d7c72159cdfa55f3b5242019a9ab48c184a86592",
"0xb0e5098b3652c2d854290246c75e9652af58ab7642ce4f3e0ffa50b177cc5bdf",
"0xb98b135f7f1f85d701dc4e638ec7d769dca4744971455d8304aad330292a5ad0",
"0x0fbc1debb0e982038e15f8413c87b525013537b64f4a68c0607fd5653bd26677",
"0x0157e8cb75de653f817cc2a5825dfed441e1a52498270bbffb5937b5f54528af",
"0x34847d61c259b0504a19e72f899031fac632bace44739ae62e01bbb8c68ed2e4",
"0xb561447e914b8f5db0da6846c81807dcf4ed6e717f75a0a7844626c2a1793a06",
"0x7657b551da248e164933727dbe00ecd2b39d85f10d35c0ad5ed0d1079789bec4",
"0x11b05b16d62e3d602f408993985951d147fa752ab89d5905f461fae0fcecdb77",
"0x203ba2c68cfdec251a3b283818696333a719c2c31baee68e88b144903cce5deb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

