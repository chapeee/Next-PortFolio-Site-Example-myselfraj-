import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Newsletter from "./Components/Newsletter";

import Header from "./Components/Header";
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
    <html lang="en" className="bg-gray-100">
       
      <body className={inter.className}>
       <Header />

        {children}
        <Newsletter />
        <div className="bg-white w-full text-center pb-14">
          <a
            href="https://www.linkedin.com/in/myselfraj/"
            className="text-2xl font-medium underline text-black"
          >
            Follow on Linkedin
          </a>
        </div>
      </body>
    </html>
  );
}
