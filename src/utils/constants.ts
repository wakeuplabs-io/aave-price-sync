export type Address = `0x${string}`;

export const ASSETS= {
  USDC: {
    address: '0x14E986C4a733B555c317D95Fe0FC5bFB5a7D166C' as Address,
    diaOracle: '0x13B6052B34c6A9Fe0419E5154826a1CB858f3181' as Address,
    productionAddess: '0x05D032ac25d322df992303dCa074EE7392C117b9' as Address
  },
  DAI: {
    address: '0xcb913C75362A7Fd39de6A5DDE4341F370F5B4419' as Address,
    diaOracle: '0xF67Ce8007810e8e87B3871B104366b105a71bB55' as Address,
    productionAddess: '0x05D032ac25d322df992303dCa074EE7392C117b9' as Address
  },
  WETH: {
    address: '0x8CEc2719a2e896A11eA3f10406EfDb6Ad87281D9' as Address,
    diaOracle: '0x27abC874f709fbc7b2af4153e875cf52C701725E' as Address,
    productionAddess: '0x05D032ac25d322df992303dCa074EE7392C117b9' as Address
  }
} as const;

export const REDSTONE_ORACLE = '0x2d484E029b8Ae5cA6335DAe11fC726B232bE87D1' as Address;
export const FALLBACK_ADDRESS = '0x49Fd3dbdd6D984523dEbE445853371AFd403aA66' as Address;
export const POOL_CONFIGURATOR_ADDRESS = '0xe73d349DAE57D1884C96d97654181E3527ea5B7C' as Address;
