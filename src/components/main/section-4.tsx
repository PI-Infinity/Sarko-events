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
      style={{ position: "absolute", top: isMobile ? "2800px" : "4380px" }}
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
              className={language === "ru" ? "font-geoFont" : "font-mineFont"}
              fill="white"
              fontSize={language === "ru" ? "64" : "90"}
              fontWeight="bold"
              letterSpacing="6px"
            >
              <textPath href="#circlePath" startOffset="0%">
                {language === "ru"
                  ? `ВСЕГДА РЯДОМ`
                  : language === "ka"
                  ? "ყოველთვის ბოლომდე"
                  : `ALWAYS ON`}
                .{" "}
                {language === "ru"
                  ? `ВСЕГДА ВОВЛЕЧЕНЫ`
                  : language === "ka"
                  ? "პროცესში ჩართული"
                  : `ALWAYS IN`}
                .{" "}
                {language === "ru"
                  ? `ВСЕГДА НА МАКСИМУМ.`
                  : language === "ka"
                  ? ""
                  : `ALL THE WAY.`}
              </textPath>
            </text>
          </svg>
        </motion.div>
        <p
          className={`text-[25px] desktop:text-[16px] absolute w-[540px] text-center top-[300px] desktop:top-[365px] ${
            language === "ru" ? "font-geoFont" : "font-secondFont"
          }`}
        >
          {language === "ru"
            ? `"В SARKO “БЕЗ ГРАНИЦ” — ЭТО НЕ ПРОСТО СЛОВА. ЭТО НАША ВОВЛЕЧЕННОСТЬ 24/7. ЭТО КОГДА МЫ МЕЧТАЕМ ВМЕСТЕ С ВАМИ, ЖИВЁМ В ДЕТАЛЯХ И ДОБИВАЕМСЯ СОВЕРШЕНСТВА.
НИКАКИХ ПЕРЕРЫВОВ. НИКАКИХ ОПРАВДАНИЙ. ТОЛЬКО РЕЗУЛЬТАТ."`
            : language === "ka"
            ? "Sarko-ში საზღვრების გარეშე ნიშნავს 24/7 ერთგულებას, გაზიარებულ ოცნებებსა და შეუფერხებელ შესრულებას. ჩვენ არ ვჩერდებით, სანამ ყველაფერი სრულყოფილი არ იქნება."
            : `At Sarko, No Limits means more than pushing boundaries — it means
          being available 24/7, dreaming with you, and delivering with
          relentless focus. We work around the clock, live inside the details,
          and stay obsessed with getting it right. No breaks. No excuses. Just
          results.`}
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
