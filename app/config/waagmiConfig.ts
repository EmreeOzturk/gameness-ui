import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { mainnet } from "wagmi/chains";
import { type Chain } from "viem";
export const projectId = "72bd0eb664a82b72267d266ccc528933";

if (!projectId) throw new Error("Project ID is not defined");
export const krestNetwork = {
  id: 2241,
  name: "Krest Network",
  nativeCurrency: {
    name: "krest",
    symbol: "KRST",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://erpc-krest.peaq.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Subscan",
      url: "https://krest.subscan.io/",
    },
  },
} as const satisfies Chain;
// Krest Network information

// Network Name: Krest Network
// RPC URL: https://erpc-krest.peaq.network
// Chain ID: 2241
// Currency Symbol: KRST
// Block Explorer URL: https://krest.subscan.io/

const metadata = {
  name: "datsproject",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create {wagmiConfig
export const config = defaultWagmiConfig({
  chains: [mainnet, krestNetwork], // required
  projectId, // required
  metadata, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: false, // Optional - true by default
});
