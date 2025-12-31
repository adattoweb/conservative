import "./globals.css";
import type { Metadata } from "next";
import Header from "@/UI/Header";
import { APP } from "@/constants/constants";

import { Montserrat_Alternates } from "next/font/google";
import Footer from "@/UI/Footer";

const montserrat = Montserrat_Alternates({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: APP.NAME,
  description: APP.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <div className="wrapper">
          <Header/>
          <div className="content">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
