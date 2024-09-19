import { Wallet } from "ethers";
import { JsonRpcProvider } from "ethers";
import { IS_TESTNET, PRIVATE_KEY, RPC_URL, RPC_URL_TESTNET } from "./config";

export const provider = new JsonRpcProvider(RPC_URL);
export const providerTestnet = new JsonRpcProvider(RPC_URL_TESTNET);

const wallet = new Wallet(PRIVATE_KEY);
export const signer = IS_TESTNET
  ? wallet.connect(providerTestnet)
  : wallet.connect(provider);
