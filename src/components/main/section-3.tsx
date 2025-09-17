import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useAppContext } from "@/context/app";

export const Section3 = () => {
  const { scrollY } = useScroll();

  const { isMobile, language } = useAppContext();
  // ძირითადი მოძრაობის მაპირება — ზუსტად შენს ფორმულებზე დაყრდნობით
  const xSarko = useTransform(
    scrollY,
    [isMobile ? 1350 : 2700, isMobile ? 2280 : 3330],
    [350, 0],
    {
      ease: easeInOut,
    }
  );

  return (
    <div
      className="w-full flex flex-col items-center gap-16 desktop:gap-24 justify-center"
      style={{ position: "absolute", top: isMobile ? "2470px" : "3520px" }}
    >
      {/* მთავარი წრე + blur */}
      <div
        className={`${
          language === "ru" ? "font-geoFont" : "font-mineFont"
        } flex flex-col text-white items-center gap-4`}
      >
        <motion.div
          style={{
            fontSize: isMobile ? "32px" : "108px",
            lineHeight: isMobile ? "32px" : "90px",
            position: "relative",
            right: xSarko,
          }}
        >
          {language === "ru"
            ? "МГНОВЕНИЯ"
            : language === "ka"
            ? "მომენტები"
            : "MOMENTS THAT"}
        </motion.div>
        <motion.div
          style={{
            fontSize: isMobile ? "32px" : "108px",
            lineHeight: isMobile ? "32px" : "90px",
            position: "relative",
            left: xSarko,
            textAlign: "center",
            top: language === "ka" ? "-10px" : "0",
          }}
        >
          <span style={{ lineHeight: language === "ka" ? "40px" : "auto" }}>
            {language === "ru"
              ? "ВНЕ ВРЕМЕНИ"
              : language === "ka"
              ? "რომლებიც ისტორიად რჩება"
              : "BECOMES LEGACY"}
          </span>
        </motion.div>
      </div>
      <p
        className={`text-white w-[90%] desktop:w-[600px] text-center ${
          language === "ru" ? "font-geoFont text-xl" : "font-secondFont"
        }`}
        dangerouslySetInnerHTML={{
          __html:
            language === "ru"
              ? `
Мы создаём не просто события — Мы создаём легенды<br>
          Ваша мечта — Наша забота <br>
          Ваш стиль  — Наша эстетика<br>
          Ваше доверие  — Наша ответственность`
              : language === "ka"
              ? "თქვენი სტილი და ესტეთიკა<br> ჩვენი საზრუნავია. <br>თქვენი ნდობა ჩვენი პასუხისმგებლობაა."
              : `We don’t just create events — we create legacies.<br>
Prestige, presence, and trust, delivered with precision.
<br>At Sarko, we bring the unimaginable to life.`,
        }}
      />
    </div>
  );
};
