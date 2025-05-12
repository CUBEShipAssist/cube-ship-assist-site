/**
 * Root layout component for the CUBE Ship Assist website.
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Removed Yomogi font import
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CUBE Ship Assist - 輸出発送代行サービス",
  description: "株式会社CUBEが提供する、簡単・安心の輸出発送代行サービスです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* Removed yomogi.variable from className */}
      <body className={`${inter.variable} flex flex-col min-h-screen bg-white`}>
        <Header />
        <main 
          className="flex-grow px-0 py-8 bg-no-repeat bg-cover bg-center w-full"
          style={{
            backgroundImage: "url('/images/content_background_abstract_white_no_logo.jpg')",
            backgroundAttachment: 'fixed',
          }}
        >
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}

