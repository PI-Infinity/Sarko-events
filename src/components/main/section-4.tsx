import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useAppContext } from "@/context/app";
import Link from "next/link";

export const Section4 = ({ sY }: any) => {
  const { scrollY } = useScroll();

  const { isMobile, language } = useAppContext();
  // Scroll-based rotation — 3645px-დან 5300px-მდე
  const rotate = useTransform(
    scrollY,
    [isMobile ? 1745 : 3545, isMobile ? 3450 : 5150],
    [-80, 180]
  );

  return (
    <div
      className="w-full flex flex-col items-center justify-center"
      style={{ position: "absolute", top: isMobile ? "2890px" : "4380px" }}
    >
      <div
        className="flex flex-col text-white items-center gap-4"
        style={{ transform: isMobile ? "scale(0.5)" : "scale(1)" }}
      >
        <motion.div
          style={{
            position: "relative",
            rotate: rotate, // ✅ scroll-ზე ბრუნავს
          }}
        >
          <svg
            viewBox="0 0 1000 1000"
            className="w-[800px] h-[800px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="circlePath"
                d="
                  M 500,500
                  m -400,0
                  a 400,400 0 1,1 800,0
                  a 400,400 0 1,1 -800,0
                "
              />
            </defs>
            <text
              className="font-mineFont"
              fill="white"
              fontSize="124"
              fontWeight="bold"
              letterSpacing="6px"
            >
              <textPath href="#circlePath" startOffset="0%">
                ALWAYS ON. ALWAYS IN. ALL THE WAY.
              </textPath>
            </text>
          </svg>
        </motion.div>
        <p className="absolute w-[480px] text-center top-[350px]">
          At Sarko, No Limits means more than pushing boundaries — it means
          being available 24/7, dreaming with you, and delivering with
          relentless focus. We work around the clock, live inside the details,
          and stay obsessed with getting it right. No breaks. No excuses. Just
          results.
        </p>
      </div>
      {/* {isMobile && (
        <Link
          style={{ transition: "ease-in 300ms" }}
          href={`/${language}/team`}
          className="hover:text-[#d1d1d1] text-white p-2 z-10 flex items-center gap-3 relative bottom-[160px]"
        >
          <p className="text-[16px] tracking-wide">MEET THE TEAM</p>
          <HiArrowSmallRight size={32} />
        </Link>
      )} */}
    </div>
  );
};
