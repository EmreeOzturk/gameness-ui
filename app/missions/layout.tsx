import type { Metadata } from "next";
import CollapsableNavbar from "../components/navbar";
import Header from "../components/header";
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
  return (
    <>
      <div className="flex md:hidden bg-slate-200 z-40">
        {/* <Header /> */}
      </div>
      {/* <CollapsableNavbar /> */}
      {children}
    </>
  );
}
