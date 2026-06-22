import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free HeyGen Cheat Sheet — ScaleAIPros",
  description: "Get the one-page cheat sheet that shows you exactly how to make your first AI video in HeyGen — plain English, no fluff.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body style={{ margin: 0, background: "#0A0A0F" }}>{children}</body>
    </html>
  );
}
