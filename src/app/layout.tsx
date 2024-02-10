import type { Metadata } from "next";
import { useRouter } from "next/router";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Newsletter from "./Components/Newsletter";
import dynamic from 'next/dynamic'

import Header from "./Components/Header";
const inter = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create2  Next App",
  description: "Generated by create next app",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={inter.className}>
       <Header />

        {children}
        <Newsletter />
        <div className="bg-white w-full text-center pb-14">
          <a
            href="https://www.linkedin.com/in/iamrajneesh/"
            className="text-2xl font-medium underline text-black"
          >
            Follow on Linkedin
          </a>
        </div>
      </body>
    </html>
  );
}
