import Configs from "@/components/configs";
import Header from "@/components/header";
import { Loading } from "@/components/loading";
import Stack from "@/components/stack";
import { AppContextWrapper } from "@/context/app";
import type { Metadata } from "next";
import "./globals.css";

import MobileMenu from "@/components/mobileMenu";

export const metadata: Metadata = {
  title: "Sarko - Events",
  description: "Your events management solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-full">
        <AppContextWrapper>
          <Loading />
          <Header />
          <MobileMenu />
          <main className="flex-grow w-full h-full">{children}</main>
          {/* <Stack /> */}
          {/* <Configs /> */}
        </AppContextWrapper>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
