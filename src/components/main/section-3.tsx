import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useAppContext } from "@/context/app";

export const Section3 = () => {
  const { scrollY } = useScroll();

  const { isMobile } = useAppContext();
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
      <div className="font-mineFont flex flex-col text-white items-center gap-4">
        <motion.div
          style={{
            fontSize: isMobile ? "32px" : "108px",
            lineHeight: isMobile ? "32px" : "90px",
            position: "relative",
            right: xSarko,
          }}
        >
          MOMENTS THAT
        </motion.div>
        <motion.div
          style={{
            fontSize: isMobile ? "32px" : "108px",
            lineHeight: isMobile ? "32px" : "90px",
            position: "relative",
            left: xSarko,
          }}
        >
          OUTLAST TIME
        </motion.div>
      </div>
      <p className="text-white w-[90%] desktop:w-[600px] text-center font-secondFont">
        We don’t just create events — we craft moments that outlast time itself.
        Our work elevates prestige, amplifies presence, and builds the kind of
        trust only possible through relentless overdelivery. At Sarko, the
        mission is clear: To bring to life what others can only imagine.
      </p>
    </div>
  );
};
