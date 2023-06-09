import 'tailwindcss/tailwind.css';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = '600d51f1ffdb7a0e0e8ac2e2acbc3b75'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
      <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient}
      />
    </>
  )
}
