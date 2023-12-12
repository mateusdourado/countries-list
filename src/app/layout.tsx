import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Play } from "next/font/google";
import Header from "@/components/Header";

const play = Play({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Country List Wiki",
  description:
    "A simple application that allows you to view diverse information about any country",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={play.className}>
        <main className="flex h-100 flex-col justify-between bg-zinc-300">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
