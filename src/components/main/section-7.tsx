import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useAppContext } from "@/context/app";

export const Section7 = ({ sY }: any) => {
  const { isMobile, language } = useAppContext();
  return (
    <div
      className={`${
        language === "ru"
          ? "font-geoFont text-[32px] desktop:text-[90px]"
          : "font-mineFont text-[32px] desktop:text-[108px]"
      } text-white text-center w-full flex flex-col items-center gap-16 desktop:gap-24`}
      style={{ position: "absolute", top: isMobile ? "5250px" : "8550px" }}
    >
      <p
        className=" w-[90%] desktop:w-[1200px] text-center"
        style={{ lineHeight: isMobile ? "40px" : "96px" }}
        dangerouslySetInnerHTML={{
          __html:
            language === "ru"
              ? `SARKO,ЭТО НЕ ДЛЯ НАС<br>
         ЭТО ПРО ВАС!`
              : language === "ka"
              ? "ჩვენ ვქმნით თქვენთვის<br>და არა ჩვენთვის."
              : "WE DON’T DESIGN FOR SARKO<br>WE DESIGN FOR YOU",
        }}
      />
    </div>
  );
};
