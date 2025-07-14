"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { usePathname } from "next/navigation";

const Header = () => {
  const { setOpenMenu, language, theme, isMobile } = useAppContext();
  const pathname = usePathname();
  return (
    <>
      <ProgressBar
        key={theme.active}
        height={isMobile ? "0.2rem" : "0.25rem"}
        color={theme.active}
        options={{ showSpinner: false }}
        shallowRouting
      />
      <div
        style={{ transition: "ease-in 300ms" }}
        className="w-full h-[90px] desktop:h-[105px] flex items-center p-4 desktop:p-0 desktop:px-12 gap-8"
      >
        <Link
          href={`/${language}`}
          style={{
            display:
              pathname === `/${language}` || pathname === `/` ? "none" : "flex",
          }}
          className="w-[150px] relative top-[1px] font-mineFont cursor-pointer text-white font-[300] text-[48px] tracking-normal"
        >
          SARKO
        </Link>

        <Link
          href={`/${language}/contact`}
          style={{ transition: "ease-in 300ms" }}
          className="whitespace-nowrap overflow-hidden ml-auto cursor-pointer hover:text-[#135A68] text-white font-[300] font-fakt-nor text-[16px] underline underline-offset-[8px] tracking-normal mb-[2px]"
        >
          LET'S CREATE
        </Link>
        <button
          style={{ transition: "ease-in 300ms" }}
          onClick={() => setOpenMenu((prev: boolean) => !prev)}
          className="w-[60px] h-[59px] rounded-full border-[1px] border-white hover:border-[#135A68] flex flex-col gap-[9px] justify-center items-center"
        >
          <div className="h-[1px] w-[28px] bg-white" />
          <div className="h-[1px] w-[28px] bg-white" />
          <div className="h-[1px] w-[28px] bg-white mb-[2px]" />
        </button>
      </div>
    </>
  );
};

export default Header;
