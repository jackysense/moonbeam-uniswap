import { ChainId } from 'moonbeamswap'
import MULTICALL_ABI from './abi.json'
import { multicall } from '../../moonbase_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.STANDALONE]: '0xF8cef78E923919054037a1D03662bBD884fF4edf',
  [ChainId.MOONROCK]: multicall,
  [ChainId.MOONBASE]: multicall,
  [ChainId.MOONSHADOW]: multicall,
  [ChainId.SEPOLIA]: '0x4709A64ccDB2C2154268801Dd61427794b2A853A',
  [ChainId.MONAD]: multicall
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
