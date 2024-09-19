# aave-price-sync

This repository contains a simple script that updates asset prices from dia oracles and stores them using a custom fallback oracle service. It periodically fetches prices from oracles and then updates them in the fallback oracle.

## Configuration

Ensure that you have the necessary variables set up. 

- Environmental variables
- Assets and Oracles addresses

You can modify or set values in the configuration files under .env and src/utils/constants.

### Environment

**MINUTES:** The interval in minutes to update prices (default is 1 minute).
**PRIVATE_KEY:** Ensure this private key has the permissions neeeded.
**RPC_URL:** Mainnet rpc
**RPC_URL_TESTNET:** Testnet rpc. Just needed if the fallback will be tested on a testnet.
**IS_TESTNET:** true/false

### Assets and oracles Addresses

Each asset and its associated DIA oracle must be listed in the configuration. You can define them in the `src/utils/constants` file.

Example:
```typescript
export const ASSET_ADDRESSES= {
  USDC: '0x14E9...66C' as Address,
  DAI: '0xcb913...419' as Address,
  WETH: '0x8CEc...1D9' as Address,
} as const;
```

Each asset requires its corresponding DIA oracle address:

```typescript
export const ORACLES: Record<Address, Address> = {
  [ASSET_ADDRESSES.USDC]: '0x13B6052B34c6A9Fe0419E5154826a1CB858f3181' as Address,
  [ASSET_ADDRESSES.DAI]: '0xF67Ce8007810e8e87B3871B104366b105a71bB55' as Address,
  [ASSET_ADDRESSES.WETH]: '0x27abC874f709fbc7b2af4153e875cf52C701725E' as Address,
} as const satisfies Record<Address, Address>;
```

The fallback oracle address where the prices will be published:


```typescript
export const FALLBACK_ADDRESS = '0x49Fd3dbdd6D984523dEbE445853371AFd403aA66' as Address;
```

## How to run

Follow these steps to run the script:

```
> 1. npm install
> 2. npm run build
> 4. cd dist
> 5. copy .env.sample to .env #complete missing variables
> 6. npm run start
```