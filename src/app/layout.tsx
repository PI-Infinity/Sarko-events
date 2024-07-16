import Header from "@/components/header";
import { Loading } from "@/components/loading";
import { AppContextWrapper } from "@/context/app";
import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/footer";
import MobileMenu from "@/components/mobileMenu";
import Popup from "@/components/popup";
import Head from "next/head";

export const metadata: Metadata = {
  openGraph: {
    title: "Sarko - Events",
    description: "Your events management solution",
    url: "https://sarkoevents.shop",
    type: "website",
    siteName: "Sarko Events",
    images: [
      {
        url: "/banner.webp",
        width: 800,
        height: 600,
        alt: "Geo Market",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <AppContextWrapper>
          <Loading />
          <Header />
          <MobileMenu />
          <main className="flex-grow w-full">{children}</main>
          {/* <Stack /> */}
          {/* <Configs /> */}
          <Popup />
          <Footer />
        </AppContextWrapper>
      </body>
    </html>
  );
}
