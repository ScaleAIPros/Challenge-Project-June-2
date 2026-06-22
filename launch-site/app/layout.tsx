import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "5-Day AI Video Launch Plan — ScaleAIPros",
  description: "Your complete 5-day launch plan for promoting the HeyGen guide across Facebook, Instagram, TikTok, X, and your community.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={inter.className}><body style={{ margin: 0 }}>{children}</body></html>;
}
