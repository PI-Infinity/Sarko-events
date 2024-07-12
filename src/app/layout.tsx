import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Stack from "@/components/stack";
import Configs from "@/components/configs";
import { AppContextWrapper } from "@/context/app";
import { Loading } from "@/components/loading";
import { Footer } from "@/components/footer";
import PageSwitcher from "@/components/pageSwitcher";
import MobileMenu from "@/components/mobileMenu";
import Head from "next/head";

export const metadata: Metadata = {
  title: "TP - Showcase",
  description: "Portfolio App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#000] h-full">
      <body className="flex flex-col h-full">
        <AppContextWrapper>
          <Loading />
          <Header />
          <MobileMenu />
          <main className="flex-grow w-full h-full overflow-hidden">
            {children}
          </main>
          <Stack />
          <PageSwitcher />
          <Configs />
        </AppContextWrapper>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
