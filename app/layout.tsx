import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "./providers/NextAuthSessionProvider";
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="antialiased no-visible-scrollbar">
      <body className={`${inter.className} relative `}>
        <NextAuthSessionProvider>
          <div className="max-w-7xl mx-auto">{children}</div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
