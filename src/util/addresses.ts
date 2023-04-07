import { Token } from '@uniswap/sdk-core';

import { ChainId, NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';
const FACTORY_ADDRESS = '0x09597F60e2250A6c562C77C4De917E555d1b4a09';

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(FACTORY_ADDRESS),
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xaB83088144b228B9eAF1e085581E630715E266Dc'),
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x91492ac082d655720fF582e53727702d8B002441'),
};

export const UNISWAP_MULTICALL_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x643a5435458BAF6c6C95c41037370b039e787761'),
};

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  console.log(chainId);
  return '0x0bc9071d104Cc95b26F6440B44B8408FD7FF9274';
};

export const OVM_GASPRICE_ADDRESS =
  '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = '0xc4bad52c1689cfae8453f1a82389b88c313ed5d1';
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  '0x1B607759e0fBD4e76e4B7A05547da8d6665619d9';
export const V3_MIGRATOR_ADDRESS = '0x1F1a26B7a2E4d09CB529A2C5FEc56b8d91AE8e4f';
// export const MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';

export type AddressMap = { [chainId: number]: string };

export function constructSameAddressMap<T extends string>(
  address: T,
  additionalNetworks: ChainId[] = []
): { [chainId: number]: T } {
  return NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(
    additionalNetworks
  ).reduce<{
    [chainId: number]: T;
  }>((memo, chainId) => {
    memo[chainId] = address;
    return memo;
  }, {});
}

export const WETH9: {
  [chainId in Exclude<
    ChainId,
    | ChainId.POLYGON
    | ChainId.POLYGON_MUMBAI
    | ChainId.CELO
    | ChainId.CELO_ALFAJORES
    | ChainId.GNOSIS
    | ChainId.MOONBEAM
    | ChainId.BSC
    | ChainId.XDC
    | ChainId.XDC_APOTHEM
  >]: Token;
} = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ROPSTEN]: new Token(
    ChainId.ROPSTEN,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GÖRLI]: new Token(
    ChainId.GÖRLI,
    '0xd439190c49276308149be5f19d22b02491f18f96',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.KOVAN]: new Token(
    ChainId.KOVAN,
    '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISM]: new Token(
    ChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISM_GOERLI]: new Token(
    ChainId.OPTIMISM_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISTIC_KOVAN]: new Token(
    ChainId.OPTIMISTIC_KOVAN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_ONE]: new Token(
    ChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_RINKEBY]: new Token(
    ChainId.ARBITRUM_RINKEBY,
    '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_GOERLI]: new Token(
    ChainId.ARBITRUM_GOERLI,
    '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
    18,
    'WETH',
    'Wrapped Ether'
  ),
};

export const UR_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0xDd0CaF4454EA13592FDD5180F4C1bf41f66a9D43'),
};

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number) => {
  const res = UR_ADDRESS[chainId];
  return res ? res : '0xDd0CaF4454EA13592FDD5180F4C1bf41f66a9D43';
};

export const POOL_INIT_CODE_HASH =
  '0x5dd58a93fdeafe39e58b1d19292aedf0a05b1a169b309c0d211599ead298fe23';

export const PERMIT2_ADDRESS = '0x0e328ed57E4EC8F490a5Ab4B470dc866A0c9110E';
