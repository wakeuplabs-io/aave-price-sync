import {  ethers } from "ethers";
import { Address } from "../../utils/constants";


export class RedstoneOracleService {
  private address;
  private provider;

  constructor(oracleAddress: Address, provider: ethers.Provider) {
    this.address = oracleAddress;
    this.provider = provider;
  }

  priceOf = async (asset: Address) => {
    const oracleContract = new ethers.Contract(this.address, [
      "function priceOf(address asset) external view returns (uint256)"
    ], this.provider);

    return await oracleContract.priceOf(asset);
  }

  latestTimestamp = async () => {
    const oracleContract = new ethers.Contract(this.address, [
      "function getTimestampsFromLatestUpdate() external view returns (uint128, uint128)"
    ], this.provider);

    return await oracleContract.getTimestampsFromLatestUpdate();
  }
}