import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hoops & Stories",
  description: "A basketball enthusiast's journey through the game",
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
