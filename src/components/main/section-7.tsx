import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useAppContext } from "@/context/app";

export const Section7 = ({ sY }: any) => {
  const { isMobile, language } = useAppContext();
  return (
    <div
      className="font-mineFont text-white text-center w-full flex flex-col items-center gap-16 desktop:gap-24"
      style={{ position: "absolute", top: isMobile ? "5250px" : "8550px" }}
    >
      <p
        className="text-[32px] desktop:text-[108px] w-[90%] desktop:w-[800px]"
        style={{ lineHeight: isMobile ? "40px" : "96px" }}
      >
        {language === "ru"
          ? `SARKO, ЭТО НЕ ДЛЯ НАС`
          : "WE DON’T DESIGN FOR SARKO"}
      </p>
      <p
        style={{ lineHeight: isMobile ? "40px" : "96px" }}
        className="w-[70%] text-[32px] desktop:text-[108px]"
      >
        {language === "ru" ? `SARKO, ЭТО ПРО ВАС!` : "WE DESIGN FOR YOU"}
      </p>
    </div>
  );
};
