import type { Metadata } from "next";
import CollapsableNavbar from "../components/navbar";
import Header from "../components/header";
import Web3ModalProvider from "@/app/providers/WagmiProvider";
import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";
import { config } from "@/app/config/waagmiConfig";
export const metadata: Metadata = {
  title: "DATS Project",
  description:
    "DATS Project is a platform that allows users to earn points by completing missions. The points can be used to redeem rewards.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    // <Web3ModalProvider initialState={initialState}>
    <>
      <div className="flex md:hidden bg-slate-200 z-30">
        {/* <Header /> */}
      </div>
      <CollapsableNavbar />
      {children}
    </>
    // </Web3ModalProvider>
  );
}
