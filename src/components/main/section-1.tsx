import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useAppContext } from "@/context/app";
import Img from "../image";

export const Section1 = ({ sY }: any) => {
  const { isMobile, language } = useAppContext();
  const { scrollY }: any = useScroll();

  // 👉 Sarko Offset (starts after 2400px scroll)

  const sarkoOffset = useTransform(
    scrollY,
    [isMobile ? 1400 : 1650, isMobile ? 2500 : 2650],
    [0, -1000],
    {
      ease: easeInOut,
    }
  );

  // 👉 All In opacity (starts around 2400 to 5000)
  const allInOpacity = useTransform(
    scrollY,
    [isMobile ? 1100 : 1100, isMobile ? 2250 : 3000],
    [0, 1],
    {
      ease: easeInOut,
    }
  );

  // 👉 All In scale
  const allInScale = useTransform(
    scrollY,
    [isMobile ? 1250 : 1400, isMobile ? 1800 : 2550],
    [0.7, 1],
    {
      ease: easeInOut,
    }
  );

  // 👉 all in Offset (starts after 2400px scroll)
  const allInOffset = useTransform(
    scrollY,
    [isMobile ? 1150 : 2400, isMobile ? 1600 : 2500, isMobile ? 3000 : 3000],
    isMobile ? [50, 50, -1000] : [150, 150, -1000],
    {
      ease: easeInOut,
    }
  );

  return (
    <div
      className="w-full items-center justify-center"
      style={{
        position: "fixed",
        zIndex: 10,
        top: isMobile ? "270px" : "150px",
        display: parseInt(sY) > 3100 ? "none" : "flex",
      }}
    >
      {/* SARKO */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        style={{
          position: "relative",
          y: sarkoOffset, // Framer uses y instead of bottom
        }}
        className="font-mineFont font-[600] text-[96px] desktop:text-[280px] tracking-normal text-white"
      >
        <div className="flex flex flex-col items-center mt-8 desktop:mt-32">
          <div
            style={{
              filter: "brightness(0.85)",
            }}
            className="w-[350px] desktop:w-[900px] desktop:h-[300px] h-[120px] flex items-center justify-center"
          >
            <Img
              src={"/logo.webp"}
              alt="img"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          {/* <h1
            className="underline desktop:underline-offset-[32px] underline-offset-[16px] decoration-[3px]"
            style={{ lineHeight: isMobile ? "100px" : "220px" }}
          >
            SARKO
          </h1>
          <p className="text-[32px] desktop:text-[64px] font-mineFont">
            EVENTS
          </p> */}
        </div>
      </motion.h1>

      {/* ALL IN */}
      <motion.h1
        style={{
          position: "absolute",
          opacity: allInOpacity,
          scale: allInScale,
          top: allInOffset,
          lineHeight: language === "ka" ? "64px" : "auto",
        }}
        className={`${
          language === "ru"
            ? "font-geoFont text-[48px] desktop:text-[140px]"
            : "font-mineFont text-[48px] desktop:text-[160px]"
        } font-[600 text-center tracking-normal text-white`}
      >
        {language === "ru"
          ? "БЕЗ ГРАНИЦ"
          : language === "ka"
          ? "საზღვრების გარეშე"
          : "NO LIMITS"}
      </motion.h1>
    </div>
  );
};
