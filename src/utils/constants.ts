export type Address = `0x${string}`;

export const ASSET_ADDRESSES= {
  USDC: '0x14E986C4a733B555c317D95Fe0FC5bFB5a7D166C' as Address,
  DAI: '0xcb913C75362A7Fd39de6A5DDE4341F370F5B4419' as Address,
  WETH: '0x8CEc2719a2e896A11eA3f10406EfDb6Ad87281D9' as Address,
} as const;

export const ORACLES: Record<Address, Address> = {
  [ASSET_ADDRESSES.USDC]: '0x13B6052B34c6A9Fe0419E5154826a1CB858f3181' as Address,
  [ASSET_ADDRESSES.DAI]: '0xF67Ce8007810e8e87B3871B104366b105a71bB55' as Address,
  [ASSET_ADDRESSES.WETH]: '0x27abC874f709fbc7b2af4153e875cf52C701725E' as Address,
} as const satisfies Record<Address, Address>;

export const FALLBACK_ADDRESS = '0x49Fd3dbdd6D984523dEbE445853371AFd403aA66' as Address;