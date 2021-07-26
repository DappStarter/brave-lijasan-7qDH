require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strategy cruise praise common gesture immense army gas'; 
let testAccounts = [
"0x50d34ffc82789947248a19d44804c5e7255f4effbce1ee631b0211a0f9d0e334",
"0xcec9d3aa11661ff3c2264d9b7508be37c0931ee879184f1338a1eae94d341faf",
"0x4ccc24d3277e11e4ccabd5aafcfaebe0da13f49b6d0877890171ce35acade70f",
"0x4035b019400ffc2011d9bc4b19954d3874070144e2d4097e70d552579bca6fb8",
"0x542fa264d2bed0bde3e87fbb106fe83aec4f288126bd56b915b6b6f84a538fff",
"0xaa440ee46d77c2113a197ee42cd0c27cac7be4f01968d3e847c56f82bb8f6f3f",
"0x8b891a52088bec3f7046db9829150d091a4c94815579f2599ad03fdb3a1ca04e",
"0x7b3e629df291adc687c737a8a63de801baae3d349c11d634d89c01c38759b5d7",
"0x4503067d679b753ca4eda2eb09fa6c1a4a2ed9b9f1047700adb2ddb0fff467bb",
"0x93ca1e30fe406023431e97482bec1cd70d004e1f9dc5a8c859ff79c223dbfb47"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


