import type { Metadata } from "next";
import { alliance2 } from "@/app/fonts";
import "./globals.css";
import Navbar from "@/app/Components/navigation/Navbar";
import Footer from "./Components/UI/Footer";
// import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Rahul Singh | Product Designer",
  description:
    "I am a product designer specializing in user experience, interaction design, and motion design.",
  keywords: [
    "product design",
    "user experience",
    "interaction design",
    "motion design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <GoogleTagManager gtmId={"GTM-NQPGH3SS"} /> */}
      <GoogleAnalytics gaId="G-MRX9XB39KK" />

      <body
        className={`${alliance2.className} antialiased flex w-full min-h-full flex-col `}
      >
        <a
          className="absolute left-4 top-[6.25rem] focus:scale-100 opacity-0 focus:opacity-100 focus:z-[102] transition duration-200 ease-curve-a bg-btn-primary-base text-btn-primary-label rounded-full px-xs text-nowrap min-h-button flex items-center justify-center gap-[0.3em] text-cta hover:bg-btn-primary-base--hover"
          href="#main"
        >
          Skip to main content
        </a>

        <header id="header">
          <Navbar />
        </header>
        <main className="relative w-full m-auto edge-to-edge-container">
          {children}
        </main>
        <Footer email="rahulsingh.uxd@gmail.com" phone="+91-6291233251" />
      </body>
    </html>
  );
}
