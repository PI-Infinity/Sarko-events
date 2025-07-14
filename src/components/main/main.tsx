"use client";
import { useAppContext } from "@/context/app";
import { useState } from "react";
import { Section1 } from "./section-1";
import { Section2 } from "./section-2";
import { Section3 } from "./section-3";
import { Section4 } from "./section-4";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Section5 } from "./section-5";
import { Section6 } from "./section-6";
import { Section7 } from "./section-7";
import { Section8 } from "./section-8";
import { Section9 } from "./section-9";

const Main = () => {
  const { theme, loading, gallery, activeLanguage, language, isMobile } =
    useAppContext();

  const { scrollY } = useScroll();
  const bgColor = useTransform(
    scrollY,
    [
      isMobile ? 2400 : 3800,
      isMobile ? 2800 : 4200,
      isMobile ? 3390 : 4990,
      isMobile ? 3790 : 5390,
      isMobile ? 5000 : 7600,
      isMobile ? 5700 : 8200,
      isMobile ? 6000 : 8400,
      isMobile ? 6100 : 8900,
    ], // გარდამავალი დიაპაზონი
    ["#000", "#135A68", "#135A68", "#000", "#000", "#6C104C", "#6C104C", "#000"]
  );

  const [scrollValue, setScrollValue] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
  });
  // scroll keeping animation
  const scrollingTextOffset: any = useTransform(
    scrollY,
    [1700, 1900],
    [24, 180],
    {
      ease: easeInOut,
    }
  );
  const scrollingTextOpacity: any = useTransform(
    scrollY,
    [1700, 1900],
    [1, 0],
    {
      ease: easeInOut,
    }
  );

  const teamTextOffset = useTransform(
    scrollY,
    [4200, 4250, 4450, 5570],
    [-32, 32, 32, 900], // ← აქ 200-ზე "შეშედება"
    { ease: easeInOut }
  );

  const capabilitiesTextOffset: any = useTransform(
    scrollY,
    [5200, 5400, 5450, 6620],
    [-32, 32, 32, 900],
    {
      ease: easeInOut,
    }
  );
  const workTextOffset: any = useTransform(
    scrollY,
    [6500, 7800, 7800, 8200],
    [32, 450, 450, 900],
    {
      ease: easeInOut,
    }
  );

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        animation: "fadeIn 3s ease-out forwards",
      }}
      className="h-[6650px] desktop:h-[9720px] w-[100vw] flex flex-col relative overflow-hidden font-secondFont"
    >
      <Section1 sY={scrollValue} />
      <Section2 />
      <Section3 />
      <Section4 sY={scrollValue} />
      <Section5 sY={scrollValue} />
      <Section6 sY={scrollValue} />
      <Section7 sY={scrollValue} />
      {/* <Section8 sY={scrollValue} /> */}
      <Section9 sY={scrollValue} />
      {/* Debug / Test */}
      {/* <div className="fixed top-0 right-0 bg-black text-white p-2 z-50">
        ScrollY: {Math.floor(scrollValue)}px
      </div> */}

      <motion.div
        style={{
          opacity: scrollingTextOpacity,
          position: "fixed",
          bottom: scrollingTextOffset,
        }}
        className="right-8 text-white p-2 z-10 flex items-center gap-3"
      >
        <p className="text-[16px] desktop:text-[21px] tracking-wide">
          KEEP SCROLLING
        </p>
        <SlArrowDown size={24} />
      </motion.div>

      {/* {!isMobile && (
        <motion.div
          style={{
            position: "fixed",
            bottom: teamTextOffset,
          }}
          className="right-8 text-white p-2 z-10 flex items-center gap-3"
        >
          <p className="text-[21px] tracking-wide">MEET THE TEAM</p>
          <HiArrowSmallRight size={32} />
        </motion.div>
      )} */}
      {/* {!isMobile && (
        <motion.div
          style={{
            position: "fixed",
            bottom: capabilitiesTextOffset,
          }}
          className="right-8 text-white p-2 z-10 flex items-center gap-3"
        >
          <p className="text-[21px] tracking-wide">OUR CAPABILITIES</p>
          <HiArrowSmallRight size={32} />
        </motion.div>
      )} */}
      {!isMobile && (
        <motion.div
          style={{
            position: "fixed",
            bottom: workTextOffset,
            display: scrollValue > 6500 && scrollValue < 8500 ? "flex" : "none",
          }}
          className="right-8 text-white p-2 z-10 flex items-center gap-3"
        >
          <p className="text-[21px] tracking-wide">SEE OUR WORK</p>
          <HiArrowSmallRight size={32} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Main;
