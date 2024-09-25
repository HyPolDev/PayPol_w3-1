import { Network, Alchemy } from 'alchemy-sdk';
import './.env'
const settings = {
    apiKey: "VX515JnRGSQ-3oUQzAzY7fERaDszAn1-",
    network: Network.ETH_HOLESKY,
};

const alchemy = new Alchemy(settings);

const vitalikAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
const usdcContract = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

// Print token balances of USDC in Vitalik's address
alchemy.core.getTokenBalances(vitalikAddress, [usdcContract]).then(console.log);

console.log("your api key is _________________________________>" + "VX515JnRGSQ-3oUQzAzY7fERaDszAn1-")