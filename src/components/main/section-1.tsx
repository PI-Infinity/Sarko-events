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
    [isMobile ? 1100 : 1100, isMobile ? 2450 : 3000],
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
    [isMobile ? 1700 : 2450, isMobile ? 3000 : 3750],
    [120, -1000],
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
        top: isMobile ? "175px" : "150px",
        display: parseInt(sY) > 3100 ? "none" : "flex",
      }}
    >
      {/* SARKO */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        style={{
          position: "relative",
          y: sarkoOffset, // Framer uses y instead of bottom
        }}
        className="font-mineFont font-[600] text-[96px] desktop:text-[280px] tracking-normal text-white"
      >
        <div className="flex flex flex-col items-center mt-8 desktop:mt-32">
          <div className="w-[450px] desktop:w-[1200px] desktop:w-[full] h-[300px] flex items-center justify-center">
            <Img
              src={"/logo.webp"}
              alt="img"
              style={{
                aspectRatio: 1,
                zIndex: 0,
                width: "100%",
                filter: "brightness(0.85)",
              }}
            />
            <div
              className="absolute desktop:bottom-[90px] bottom-[126.5px] rounded-full"
              style={{
                height: isMobile ? "3px" : "8px",
                width: "70%",
                background: "white",
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
        }}
        className="font-mineFont font-[600 text-[48px] desktop:text-[160px] tracking-normal text-white mt-4"
      >
        {language === "ru" ? "Без границ" : "NO LIMITS"}
      </motion.h1>
    </div>
  );
};
