import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cashifi - Modern Financial Intelligence Platform",
  description: "Transform your financial operations with AI-powered analytics, real-time insights, and enterprise-grade security. Built for modern finance teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // v1
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased bg-[#0A0A0F] text-white`}>
        {children}
      </body>
    </html>
  );
}