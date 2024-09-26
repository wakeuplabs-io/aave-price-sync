import { OracleStale } from "./src/application/oracleStale";
import { FallbackOracleService } from "./src/infra/fallbackOracle/service";
import { DiaOracleService } from "./src/infra/oracle/diaService";
import { MINUTES } from "./src/utils/config";
import { Address, ASSETS, FALLBACK_ADDRESS } from "./src/utils/constants";
import { provider, signer } from "./src/utils/provider";

async function updatePrices() {
  const fallbackOracleService = new FallbackOracleService(FALLBACK_ADDRESS, signer);

  for (const symbol in ASSETS) {
    const asset = ASSETS[symbol];

    const oracleService = new DiaOracleService(asset.diaOracle, provider);
    const price = await oracleService.getAssetPrice();
  
    console.log(` ${asset} = ${price}`);
    await fallbackOracleService.setAssetPrice(asset as Address, price);
  }
}



function main() {
  // updatePrices();
  // setInterval(updatePrjices, Number(MINUTES ?? 1) * 60 * 1000);

  const oracleStale = new OracleStale();

  oracleStale.checkOracleStale();
  // setInterval(oracleStale.checkOracleStale, Number(MINUTES ?? 1) * 1000);
}

main();