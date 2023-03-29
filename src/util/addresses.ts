import { Token } from '@uniswap/sdk-core';
import { ChainId, NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';
const FACTORY_ADDRESS = '0x5cC60dd4f07206a7994885572237d2467acbB5C2';

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(FACTORY_ADDRESS),
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xeF53145eAA955F0b7749a80315De815e383540FB'),
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x801FC6256c84cABC48a1b4Df845eB8D5178b69a7')
};

export const UNISWAP_MULTICALL_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xb9137A4295f27d8c7F4aF425EF51Db71aDe85dc9')
};

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  console.log(chainId)
  return '0xeA9dd540533463bDfdCf659b44344cF189C9B7e7';
};

export const OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = '0xF82Ff20aD77C9F97A996AE9235234D7CCA8f658C';
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x4b722F4a38F97E4078260DE0C47F34Ae0c404DbF';
export const V3_MIGRATOR_ADDRESS = '0x0C5f9A18eaf1d6E52789B5FbF397e71969D0B350';
export const MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';

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
  ...constructSameAddressMap('0x27Daf3f78fCdE43E40E4F3F144FEbc856f7352F8'),
};

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number) => {
  let res = UR_ADDRESS[chainId];
  return res ? res : '0x27Daf3f78fCdE43E40E4F3F144FEbc856f7352F8'
};

export const POOL_INIT_CODE_HASH = "0xc24772465698cf5cb6165a15e3a579b6c0098ef5120815ecda4c0f1f95e02af0";

export const PERMIT2_ADDRESS = "0x000000000022D473030F116dDEE9F6B43aC78BA3";