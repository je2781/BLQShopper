import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

import "./globals.css";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "testvalley",
  description: "TestValley Shopper app for pc clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
          <Navbar />
          <main>{children}</main>
      </body>
    </html>
  );
}
