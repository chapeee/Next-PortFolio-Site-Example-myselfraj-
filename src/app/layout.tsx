import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Newsletter from "./Components/Newsletter";
import NextTopLoader from 'nextjs-toploader';
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
      <NextTopLoader color="#09757a"  crawl={true} />
        <Header />

        {children}
        <Newsletter />
        <div className="bg-white grid grid-cols-1 sm:grid-cols-3 w-full text-center pb-14">
          <a
            href="https://www.linkedin.com/in/myselfraj/"
            className="text-2xl m-2 font-medium underline text-gray-800"
          >
            Follow on Linkedin
          </a>
          <a
            href="https://github.com/chapeee"
            className="text-2xl m-2 font-medium underline text-gray-800"
          >
            Check My GitHub
          </a>
          <a
            href="https://www.npmjs.com/~chapeee"
            className="text-2xl m-2 font-medium underline text-gray-800"
          >
            My Js/Ts Packages
          </a>
        </div>
      </body>
    </html>
  );
}
