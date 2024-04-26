import type { Metadata } from "next";
import {alliance2} from '@/app/Components/fonts';
import "./globals.css";
import Navbar from "./Components/layout";




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={alliance2.className}>{children}</body> */}
      <body className= {`${alliance2.className} antialiased max-w-5xl mx-auto`}>
        <Navbar />
        <main className="flex-auto min-w-0 w-full mt-6 flex flex-col px-2 md:px-0">
        {children}
        </main>
      </body>
    </html>

  );
}
