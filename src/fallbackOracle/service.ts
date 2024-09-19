import { ethers } from "ethers";
import { Address } from "../utils/constants";
import { BigNumberish } from "ethers";
import { providerTestnet } from "../utils/provider";


export class FallbackOracleService {
  private fallbackOracleAddress;
  private signer: ethers.Signer;
  constructor(fallbackOracleAddress: Address, signer: ethers.Signer) {
    this.fallbackOracleAddress = fallbackOracleAddress;
    this.signer = signer;
  }

  getAssetPrice = async (asset: Address) => {
    const oracleContract = new ethers.Contract(this.fallbackOracleAddress, [
      "function getAssetPrice(address asset) view returns (uint256)"
    ], providerTestnet);

    return await oracleContract.getAssetPrice(asset);
  }

  setAssetPrice = async (asset: Address, price: BigNumberish) => {
    const oracleContract = new ethers.Contract(this.fallbackOracleAddress, [
      "function setAssetPrice(address asset, uint256 price) external"
    ], this.signer);

    const gasPrice = await oracleContract.setAssetPrice.estimateGas(asset, price);
    const tx = await oracleContract.setAssetPrice(asset, price, {
      gasPrice: gasPrice
    });

    await tx.wait(1);
  }
}