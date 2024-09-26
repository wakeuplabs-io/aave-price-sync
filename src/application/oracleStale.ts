import { RedstoneOracleService } from "../infra/oracle/redStoneService";
import { PoolConfiguratorService } from "../infra/poolConfigurator/service";
import { ASSETS, POOL_CONFIGURATOR_ADDRESS, REDSTONE_ORACLE } from "../utils/constants";
import { provider, signer } from "../utils/provider";

export class OracleStale {
  readonly STALE_THRESHOLD = 60 * 60; // 1 hour
  private reservesPaused: Record<keyof typeof ASSETS, boolean>;
  constructor() {
    this.reservesPaused = Object.keys(ASSETS).reduce(
      (acc, key: keyof typeof ASSETS) => ({ ...acc, [key]: false }),
      {} as Record<keyof typeof ASSETS, boolean>
    );
  }

  checkOracleStale = async () => {
    const poolConfiguratorService = new PoolConfiguratorService(POOL_CONFIGURATOR_ADDRESS, signer);
  
    for (const symbol in ASSETS) {
      const asset = ASSETS[symbol];
      console.log(`Checking ${symbol}...`);
      const oracleService = new RedstoneOracleService(REDSTONE_ORACLE, provider);
      const [latestTimestamp, now] = await oracleService.latestTimestamp();
      
      const difference = (BigInt(now) * BigInt(1000)) - latestTimestamp;
      const stale = difference > this.STALE_THRESHOLD;
  
      if (stale && !this.reservesPaused[symbol]) {
          this.reservesPaused[symbol] = true;
          await poolConfiguratorService.setReservePause(asset.address, true);
      } 
      
      if (!stale && this.reservesPaused[symbol]) {
        this.reservesPaused[symbol] = false;
        await poolConfiguratorService.setReservePause(asset.address, false);
      }
    
    }
  }  
}