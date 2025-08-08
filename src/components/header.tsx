"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { usePathname } from "next/navigation";
import Headroom from "react-headroom";
import Img from "./image";

const Header = () => {
  const { setOpenMenu, language, theme, isMobile } = useAppContext();
  const pathname = usePathname();
  console.log(language);
  return (
    <>
      <ProgressBar
        key={theme.active}
        height={isMobile ? "0.2rem" : "0.25rem"}
        color={theme.active}
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Headroom
        downTolerance={20}
        upTolerance={20}
        className="fixed w-full z-10"
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            transition: "ease-in 300ms",
            animation: "fadeIn 3s ease-out forwards",
          }}
          className="w-full h-[90px] desktop:h-[105px] flex items-center p-4 desktop:p-0 desktop:px-12 gap-4"
        >
          {pathname && pathname !== `/${language}` && (
            <Link
              href={`/${language}`}
              style={{
                display:
                  pathname === `/${language}` || pathname === `/`
                    ? "none"
                    : "flex",
              }}
              className="w-[140px] h-[30px] relative top-[1px] font-mineFont cursor-pointer text-white font-[300] text-[40px] tracking-normal"
            >
              <div
                style={{
                  filter: "brightness(0.85)",
                }}
                className="w-[150px] flex items-center justify-center"
              >
                <Img
                  src={"/logo1.webp"}
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </Link>
          )}

          <Link
            href={`/${language}/contact`}
            style={{
              transition: "ease-in 300ms",
            }}
            className="whitespace-nowrap overflow-hidden ml-auto cursor-pointer hover:text-[#135A68] text-white font-[300] font-fakt-nor text-[vw] underline underline-offset-[8px] tracking-normal mb-[2px]"
          >
            {language === "ru"
              ? "ДАВАЙТЕ ТВОРИТЬ"
              : language === "en" || language === "ka"
              ? "LET'S CREATE"
              : ""}
          </Link>
          {language?.length > 0 && (
            <button
              style={{
                transition: "ease-in 300ms",
              }}
              onClick={() => setOpenMenu((prev: boolean) => !prev)}
              className="w-[60px] h-[59px] rounded-full border-[1px] border-white hover:border-[#135A68] flex flex-col gap-[9px] justify-center items-center"
            >
              <div className="h-[1px] w-[28px] bg-white" />
              <div className="h-[1px] w-[28px] bg-white" />
              <div className="h-[1px] w-[28px] bg-white mb-[2px]" />
            </button>
          )}
        </div>
      </Headroom>
    </>
  );
};

export default Header;
