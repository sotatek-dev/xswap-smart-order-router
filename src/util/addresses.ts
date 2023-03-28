import { Token } from '@uniswap/sdk-core';
import { ChainId, NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';
const FACTORY_ADDRESS = '0xF7B347CD031c36ba2Bfa2D7AEa18d5884D582D7b';

// const CELO_V3_CORE_FACTORY_ADDRESSES =
//   '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc';
// const CELO_QUOTER_ADDRESSES = '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8';
// const CELO_MULTICALL_ADDRESS = '0x633987602DE5C4F337e3DbF265303A1080324204';

// const ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES =
//   '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6';
// const ARBITRUM_GOERLI_QUOTER_ADDRESSES =
//   '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA';
// const ARBITRUM_GOERLI_MULTICALL_ADDRESS =
//   '0x8260CB40247290317a4c062F3542622367F206Ee';

// const OPTIMISM_GOERLI_V3_CORE_FACTORY_ADDRESSES =
//   '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10';
// const OPTIMISM_GOERLI_QUOTER_ADDRESSES =
//   '0x9569CbA925c8ca2248772A9A4976A516743A246F';
// const OPTIMISM_GOERLI_MULTICALL_ADDRESS =
//   '0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd';

// const BSC_V3_CORE_FACTORY_ADDRESSES =
//   '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7';
// const BSC_QUOTER_ADDRESSES = '0x78D78E420Da98ad378D7799bE8f4AF69033EB077';
// const BSC_MULTICALL_ADDRESS = '0x963Df249eD09c358A4819E39d9Cd5736c3087184';

// export const BSC_TICK_LENS_ADDRESS =
//   '0xD9270014D396281579760619CCf4c3af0501A47C';
// export const BSC_NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
//   '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613';
export const BSC_SWAP_ROUTER_02_ADDRESS =
  '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2';
// export const BSC_V3_MIGRATOR_ADDRESS =
//   '0x32681814957e0C13117ddc0c2aba232b5c9e760f';

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(FACTORY_ADDRESS),
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x5DBE40AB0e059251281DdA9b1568A08Ef5D7d132'),
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = {
  [ChainId.GÖRLI]: '0xBa60b6e6fF25488308789E6e0A65D838be34194e',
};

export const UNISWAP_MULTICALL_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xb9137A4295f27d8c7F4aF425EF51Db71aDe85dc9')
};

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  // if (chainId == ChainId.BSC) {
  //   return BSC_SWAP_ROUTER_02_ADDRESS;
  // }

  console.log(chainId)
  return '0xF733D8b8e548cb00A216Ea92f16Bc65d1CaE4613';
};

export const OVM_GASPRICE_ADDRESS =
  '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
// export const TICK_LENS_ADDRESS = '0xbfd8137f7d1516D3ea5cA83523914859ec47F573';
// export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
//   '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';
// export const V3_MIGRATOR_ADDRESS = '0xA5644E29708357803b5A882D272c41cC0dF92B34';
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
  [ChainId.MAINNET]: '0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B',
  [ChainId.GÖRLI]: '0x4648a43B2C14Da09FdF82B161150d3F634f40491',
  [ChainId.BSC]: '0x5Dc88340E1c5c6366864Ee415d6034cadd1A9897',
};

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number) => {
  let res = UR_ADDRESS[chainId];
  return res ? res : '0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B'
};

export const POOL_INIT_CODE_HASH = "0xb23f0c72192666de097dc92214d3ee75ca7e7e39cb8d41ee82b709e1e7dfd535"