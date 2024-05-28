import type { Metadata } from "next";
import { alliance2 } from "@/app/fonts";
import "./globals.css";
import Navbar from "@/app/Components/navigation/Navbar"
import Footer from "./Components/UI/Footer";
import { GoogleTagManager } from '@next/third-parties/google'





export const metadata: Metadata =  {
  title: 'Rahul Singh | Product Designer',
  description: 'I am a product designer specializing in user experience, interaction design, and motion design.',
  keywords: ['product design', 'user experience', 'interaction design', 'motion design'],
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <GoogleTagManager gtmId={"GTM-NQPGH3SS"} />
      <body
    className={`${alliance2.className} antialiased flex w-full min-h-full flex-col bg-[--root-bg]`}
    >
        <header id="header">
          <Navbar />
        </header>
        <main className="relative w-full m-auto edge-to-edge-container">{children}</main>
        <Footer email="rahulsingh.uxd@gmail.com" phone="+91-6291233251" />
      </body>
    </html>
  );
}
