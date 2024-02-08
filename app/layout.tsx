import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "testvalley.kr",
  description: "TestValley Shopper app for pc clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
