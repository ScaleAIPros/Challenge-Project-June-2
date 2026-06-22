import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "How to Create AI Videos Without Being on Camera | ScaleAIPros",
  description: "A plain-English guide to HeyGen 2026. Learn how any business owner can create professional AI videos — no camera, no editing, no stress.",
  openGraph: {
    title: "AI Video Without the Camera — ScaleAIPros Free Guide",
    description: "7 key points from HeyGen's complete 2026 tutorial, simplified for non-technical business owners.",
    siteName: "ScaleAIPros",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ margin: 0, background: "#0A0A0F" }}>{children}</body>
    </html>
  );
}
