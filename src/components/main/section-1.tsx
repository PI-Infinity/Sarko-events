import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useAppContext } from "@/context/app";

export const Section1 = ({ sY }: any) => {
  const { isMobile } = useAppContext();
  const { scrollY }: any = useScroll();

  // 👉 Sarko Offset (starts after 2400px scroll)

  const sarkoOffset = useTransform(
    scrollY,
    [isMobile ? 1200 : 1650, isMobile ? 2300 : 2650],
    [0, -1000],
    {
      ease: easeInOut,
    }
  );

  // 👉 All In opacity (starts around 2400 to 5000)
  const allInOpacity = useTransform(
    scrollY,
    [isMobile ? 750 : 1100, isMobile ? 2450 : 3000],
    [0, 1],
    {
      ease: easeInOut,
    }
  );

  // 👉 All In scale
  const allInScale = useTransform(
    scrollY,
    [isMobile ? 1050 : 1400, isMobile ? 2200 : 2550],
    [0.8, 1],
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
        className="font-mineFont font-[600] text-[108px] desktop:text-[280px] tracking-normal text-white"
      >
        <div className="flex flex flex-col items-center mt-32 ">
          <h1
            className="underline desktop:underline-offset-[32px] underline-offset-[16px] decoration-[3px]"
            style={{ lineHeight: isMobile ? "100px" : "220px" }}
          >
            SARKO
          </h1>
          <p className="text-[40px] desktop:text-[64px] font-mineFont">
            EVENTS
          </p>
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
        className="font-mineFont font-[600 text-[80px] desktop:text-[160px] tracking-normal text-white"
      >
        NO LIMITS
      </motion.h1>
    </div>
  );
};
