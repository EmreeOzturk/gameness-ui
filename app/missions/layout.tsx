import type { Metadata } from "next";
import CollapsableNavbar from "../components/navbar";
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
    <div className="flex">
      <CollapsableNavbar />
      {children}
    </div>
  );
}
