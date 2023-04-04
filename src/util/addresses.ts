import { Token } from '@uniswap/sdk-core';
import { ChainId, NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';
const FACTORY_ADDRESS = '0x365b480daaa48c9bc20550de2820a6bf1d0ab813';

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(FACTORY_ADDRESS),
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xf67728b7f2b7a9a28fb919e4e7872831fcd30387'),
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x0be4a2d64e970171c15068f2a40449d221f31880')
};

export const UNISWAP_MULTICALL_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xee10a4e19efe13ed540337c75799542fba421951')
};

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  console.log(chainId)
  return '0x2ac9f59fbc5a366c867e78715c4cfae7aaadeaee';
};

export const OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = '0xc4bad52c1689cfae8453f1a82389b88c313ed5d1';
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xae95b46a332ef5bf52d2df79e2196aaf98810e78';
export const V3_MIGRATOR_ADDRESS = '0xbaccf53c0223f50e6a0b1d6c4264772cbbbd5253';
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
  ...constructSameAddressMap('0xEbbA0A437E680cC8BAb7586De34692B5F80CcBeD'),
};

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number) => {
  let res = UR_ADDRESS[chainId];
  return res ? res : '0xEbbA0A437E680cC8BAb7586De34692B5F80CcBeD'
};

export const POOL_INIT_CODE_HASH = "0x5dd58a93fdeafe39e58b1d19292aedf0a05b1a169b309c0d211599ead298fe23";

export const PERMIT2_ADDRESS = "0x917f73c5166911db561b0f99847a992bd6419411";