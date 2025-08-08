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
    [isMobile ? 3200 : 5300, isMobile ? 4250 : 6300],
    [isMobile ? 10 : 15, isMobile ? -15 : -30],
    {
      ease: easeInOut,
    }
  );

  return (
    <div
      className="w-full flex flex-col h-[800px] items-center gap-24 justify-center"
      style={{ position: "absolute", top: isMobile ? "3480px" : "5510px" }}
    >
      <div
        className="flex flex-col text-white items-center gap-6 text-[32px] desktop:text-[108px] font-mineFont"
        style={{ lineHeight: isMobile ? "24px" : "80px" }}
      >
        <p>{language === "ru" ? `ДЛЯ ТЕХ` : `FOR THOSE`}</p>
        <p>{language === "ru" ? `КТО ХОЧЕТ ПРЕВРАТИТЬ` : `IN SEARCH OF`}</p>
        <p>{language === "ru" ? `В НЕЧТО ИДЕЮ` : `UNFORGETTABLE`}</p>
      </div>
      <div
        className="flex text-white items-center gap-2 desktop:gap-6 text-[32px] desktop:text-[108px] font-mineFont"
        style={{ lineHeight: isMobile ? "24px" : "80px" }}
      >
        <p>{language === "ru" ? `Н` : "T"}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `Е` : "R"}</p>
        </motion.div>
        <p>{language === "ru" ? `З` : "A"}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `А` : "N"}</p>
        </motion.div>
        <p>{language === "ru" ? `Б` : "S"}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `Ы` : "F"}</p>
        </motion.div>
        <p>{language === "ru" ? `В` : "O"}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `А` : "R"}</p>
        </motion.div>
        <p>{language === "ru" ? `Е` : "M"}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `М` : ""}</p>
        </motion.div>
        <p>{language === "ru" ? `О` : ""}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `Е` : ""}</p>
        </motion.div>
      </div>
      <p className="text-white text-[16px] w-[90%] desktop:w-[600px] text-center">
        {language === "ru"
          ? `"ВЫ МЕЧТАЕТЕ — МЫ ВОПЛОЩАЕМ.
СМЕЛО. ЭЛЕГАНТНО. С ЗАБОТОЙ О КАЖДОЙ ДЕТАЛИ.
МЫ ПРЕВРАЩАЕМ ИДЕИ В СОБЫТИЯ, КОТОРЫЕ ХОЧЕТСЯ ПЕРЕЖИТЬ СНОВА И СНОВА."`
          : ` You bring the vision. Sarko brings the transformation. With bold
        creativity, deep collaboration, and execution that feels effortless — we
        turn imagination into immersive, unforgettable events.`}
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
