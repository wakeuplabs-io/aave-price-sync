import { FallbackOracleService } from "./src/fallbackOracle/service";
import { OracleService } from "./src/oracle/service";
import { MINUTES } from "./src/utils/config";
import { Address, FALLBACK_ADDRESS, ORACLES } from "./src/utils/constants";
import { signer } from "./src/utils/provider";

async function updatePrices() {
  const fallbackOracleService = new FallbackOracleService(FALLBACK_ADDRESS, signer);
  console.log("assets", ORACLES);

  for (const asset in ORACLES) {
    const oracleService = new OracleService(ORACLES[asset]);
    const price = await oracleService.getAssetPrice();
  
    console.log(` ${asset} = ${price}`);
    await fallbackOracleService.setAssetPrice(asset as Address, price);
  }
}


function main() {
  updatePrices();
  setInterval(updatePrices, Number(MINUTES ?? 1) * 60 * 1000);
}

main();