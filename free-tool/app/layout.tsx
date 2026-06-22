import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "AI Video Readiness Score — ScaleAIPros Free Tool",
  description: "Answer 5 quick questions and find out exactly which AI video use case will have the biggest impact on your business.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={inter.className}><body style={{ margin: 0 }}>{children}</body></html>;
}
