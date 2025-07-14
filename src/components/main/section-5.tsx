import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useAppContext } from "@/context/app";
import Link from "next/link";

export const Section5 = ({ sY }: any) => {
  const { scrollY } = useScroll();
  const { isMobile, language } = useAppContext();
  // ძირითადი მოძრაობის მაპირება — ზუსტად შენს ფორმულებზე დაყრდნობით
  const letterP = useTransform(
    scrollY,
    [isMobile ? 3300 : 5300, isMobile ? 4100 : 6300],
    [isMobile ? 10 : 15, isMobile ? -15 : -30],
    {
      ease: easeInOut,
    }
  );

  return (
    <div
      className="w-full flex flex-col h-[800px] items-center gap-24 justify-center"
      style={{ position: "absolute", top: isMobile ? "3750px" : "5510px" }}
    >
      <div
        className="flex flex-col text-white items-center gap-6 text-[48px] desktop:text-[108px] font-mineFont"
        style={{ lineHeight: isMobile ? "36px" : "80px" }}
      >
        <p>FOR THOSE</p>
        <p>IN SEARCH OF</p>
        <p>UNFORGETTABLE</p>
      </div>
      <div
        className="flex text-white items-center gap-2 desktop:gap-6 text-[48px] desktop:text-[108px] font-mineFont"
        style={{ lineHeight: isMobile ? "36px" : "80px" }}
      >
        <p>T</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>R</p>
        </motion.div>
        <p>A</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>N</p>
        </motion.div>
        <p>S</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>F</p>
        </motion.div>
        <p>O</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>R</p>
        </motion.div>
        <p>M</p>
      </div>
      <p className="text-white text-[16px] w-[90%] desktop:w-[600px] text-center">
        You bring the vision. Sarko brings the transformation. With bold
        creativity, deep collaboration, and execution that feels effortless — we
        turn imagination into immersive, unforgettable events.
      </p>
      {/* {isMobile && (
        <Link
          style={{ transition: "ease-in 300ms" }}
          href={`/${language}/capabilities`}
          className="hover:text-[#135A68] text-white p-2 z-10 flex items-center gap-3 relative bottom-[40px]"
        >
          <p className="text-[16px] tracking-wide">OUR CAPABILITIES</p>
          <HiArrowSmallRight size={32} />
        </Link>
      )} */}
    </div>
  );
};
