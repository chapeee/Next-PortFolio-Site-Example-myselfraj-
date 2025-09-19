import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const inter = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "👋 Hi! I am Raj, Your Next Dev",
  description: "I create simple but strong code to fulfill your requirements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#eef2f5]">
      <body
        className={`${inter.className} bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#eef2f5] text-slate-900 antialiased`}
      >
        <NextTopLoader color="#09757a" crawl={true} />
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
