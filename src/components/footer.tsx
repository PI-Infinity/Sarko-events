"use client";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";
import React from "react";
import Img from "./image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

export const Footer = () => {
  const pathname = usePathname();
  const { loading, theme, language, setLanguage } = useAppContext();
  return (
    <div
      style={{
        display: loading ? "none" : "flex",
        background: theme.background,
      }}
      className="h-[300px] z-40 px-[5%] pt-8 pb-6 w-full
      border-t-[0.5px] border-t-[rgba(255,255,255,0.1)]
      flex-col justify-between"
    >
      <div className="w-full flex justify-between">
        <Link
          href="/"
          className="flex items-center gap-4 scale-up cursor-pointer"
        >
          <div className="relative w-[100px] h-[35px] flex items-center justify-center">
            <Img
              src={theme.id === "light" ? "/logo-black.png" : "/sarko-logo.png"}
              alt="Sarko"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <div
            className={` ${
              language !== "en"
                ? "hover:opacity-[0.8] cursor-pointer"
                : "cursor-default"
            }`}
          >
            <ReactCountryFlag
              className="emojiFlag"
              onClick={() => setLanguage("en")}
              countryCode="GB"
              style={{
                opacity: language === "en" ? 1 : 0.5,
                fontSize: 16,
              }}
              aria-label="GB"
            />
          </div>
          <div
            className={` ${
              language !== "ka"
                ? "hover:opacity-[0.8] cursor-pointer"
                : "cursor-default"
            }`}
          >
            <ReactCountryFlag
              className="emojiFlag"
              onClick={() => setLanguage("ka")}
              countryCode="GE"
              style={{
                opacity: language === "ka" ? 1 : 0.5,
                fontSize: 16,
              }}
              aria-label="Georgia"
            />
          </div>

          <div
            className={` ${
              language !== "en"
                ? "hover:opacity-[0.8] cursor-pointer"
                : "cursor-default"
            }`}
          >
            <ReactCountryFlag
              className="emojiFlag"
              onClick={() => setLanguage("ru")}
              countryCode="RU"
              style={{
                opacity: language === "ru" ? 1 : 0.5,
                fontSize: 16,
              }}
              aria-label="RU"
            />
          </div>
        </div>
      </div>

      <div style={{ color: theme.text }} className="z-10 flex items-center">
        &copy; Copyright
      </div>
    </div>
  );
};
