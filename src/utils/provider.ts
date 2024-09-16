import { Wallet } from "ethers";
import { JsonRpcProvider } from "ethers";
import { PRIVATE_KEY, RPC_URL } from "./config";

export const provider = new JsonRpcProvider(RPC_URL);
//TODO: remove testnet. Just for testing purposes
export const providerTestnet = new JsonRpcProvider("https://testnet.rpc.gobob.xyz/");

const wallet = new Wallet(PRIVATE_KEY);
export const signer = wallet.connect(providerTestnet);
