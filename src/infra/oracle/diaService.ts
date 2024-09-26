import {  ethers } from "ethers";
import { Address } from "../../utils/constants";


export class DiaOracleService {
  private address;
  private provider;

  constructor(oracleAddress: Address, provider: ethers.Provider) {
    this.address = oracleAddress;
    this.provider = provider;
  }

  getAssetPrice = async () => {
    const oracleContract = new ethers.Contract(this.address, [
      "function latestAnswer() external view returns (int256)"
    ], this.provider);

    return await oracleContract.latestAnswer();
  }
}