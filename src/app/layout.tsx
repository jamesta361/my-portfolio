import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lionel Jores Nyangon | Web3 Security Engineer",
  description: "Portfolio of Lionel Jores Nyangon — Web3 security engineer, DeFi builder, OpenMythos-Bot creator, and AI-powered crypto automation developer.",
  keywords: ["Lionel Jores", "Web3 Security", "OpenMythos-Bot", "Solidity", "DeFi", "Flash Loans", "Solana", "EVM"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
