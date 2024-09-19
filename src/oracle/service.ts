import {  ethers } from "ethers";
import { Address } from "../utils/constants";
import { provider } from "../utils/provider";


export class OracleService {
  private address;

  constructor(oracleAddress: Address) {
    this.address = oracleAddress;
  }

  getAssetPrice = async () => {
    const oracleContract = new ethers.Contract(this.address, [
      "function latestAnswer() external view returns (int256)"
    ], provider);

    return await oracleContract.latestAnswer();
  }
}