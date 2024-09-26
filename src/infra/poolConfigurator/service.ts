import { ethers } from "ethers";
import { Address } from "../../utils/constants";

export class PoolConfiguratorService {
  private poolConfiguratorAddress: Address;
  private signer: ethers.Signer;
  constructor(poolConfiguratorAddress: Address, signer: ethers.Signer) {
    this.poolConfiguratorAddress = poolConfiguratorAddress;
    this.signer = signer;
  }

  setReservePause = async (asset: Address, paused: boolean) => {
    const oracleContract = new ethers.Contract(this.poolConfiguratorAddress, [
      "function setReservePause(address asset, bool paused) external"
    ], this.signer);

    return await oracleContract.setReservePause(asset, paused);
  }
}