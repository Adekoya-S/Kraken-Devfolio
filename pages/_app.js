import "@/styles/globals.css";
import { connectorsForWallets, darkTheme } from "@rainbow-me/rainbowkit";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { ArcanaConnector } from "@arcana/auth-wagmi";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, mainnet, polygonMumbai } from "@wagmi/core/chains";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import merge from "lodash.merge";

const mantleTestnet = {
  id: 5001,
  name: "Mantle",
  network: "mantle",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "BIT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: { name: "Wadsley", url: "https://explorer.testnet.mantle.xyz/" },
    etherscan: { name: "Wadsley", url: "https://explorer.testnet.mantle.xyz/" },
  },
  testnet: true,
};

const { provider, chains } = configureChains(
  [mantleTestnet],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Kraken",
  chains,
});

// export const ArcanaRainbowConnector = ({ chains }) => {
//   return {
//     id: "arcana-auth",
//     name: "Arcana Wallet",
//     iconUrl: "",
//     iconBackground: "#101010",
//     createConnector: () => {
//       const connector = new ArcanaConnector({
//         chains,
//         options: {
//           // appId parameter refers to App Address value in the Dashboard
//           appId: "7e2d9f46b84153e86625a7180f21dbaeb076a492",
//         },
//       });
//       return {
//         connector,
//       };
//     },
//   };
// };

// const connectors = (chains) =>
//   connectorsForWallets([
//     {
//       groupName: "Recommended",
//       wallets: [ArcanaRainbowConnector({ chains }), metaMaskWallet({ chains })],
//     },
//   ]);

// const { chains, provider } = configureChains(
//   [polygonMumbai],
//   [publicProvider()]
// );

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors(chains),
  provider,
});

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: "#A020F0",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme} coolMode>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
