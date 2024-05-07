import type { Metadata } from "next";
import { alliance2 } from "@/app/fonts";
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
    <html lang="en" >
      <body
    className={`${alliance2.className} antialiased flex w-full min-h-full flex-col bg-[--root-bg]`}
    >
        <header id="header">
          <Navbar />
        </header>
        <div className="edge-to-edge-container relative w-full m-auto">{children}</div>
        <footer className="">
          <p>some footer link will go here</p>
        </footer>
      </body>
    </html>
  );
}
