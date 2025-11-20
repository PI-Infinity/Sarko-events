import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useAppContext } from "@/context/app";
import Link from "next/link";

export const Section6 = ({ sY }: any) => {
  const { scrollY } = useScroll();
  const { isMobile, language } = useAppContext();
  // ძირითადი მოძრაობის მაპირება — ზუსტად შენს ფორმულებზე დაყრდნობით
  const transfer: any = useTransform(
    scrollY,
    [isMobile ? 3750 : 5700, isMobile ? 6100 : 8000],
    [0, 150],
    {
      ease: easeInOut,
    }
  );

  return (
    <div
      className="w-full flex flex-col items-center gap-4 w-[100%]"
      style={{ position: "absolute", top: isMobile ? "4380px" : "6700px" }}
    >
      <div className="w-[100%] gap-[2%] flex items-center justify-evenly relative">
        <motion.div className="desktop:mt-[50px] w-[20%] h-[120px] desktop:h-[340px]">
          <img
            src="/dance.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%" }}
            className="rounded-[10px] 
desktop:rounded-[20px] relative left-[-10px] grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>

        <motion.div
          className="w-[26%] h-[140px] desktop:h-[500px] desktop:rounded-[40px]"
          style={{ position: "relative", bottom: transfer }}
        >
          <img
            src="/a.IMG_1664.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%" }}
            className="relative left-[-10px] rounded-[10px] desktop:rounded-3xl relative bottom-[40px] grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>

        <motion.div className="right-[120px] desktop:right-[650px] top-[40px] desktop:top-[200px] w-[22%] h-[110px]  desktop:h-[340px]">
          <img
            src="/we.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%" }}
            className="rounded-[10px]
desktop:rounded-[20px] relative left-[-10px] top-[20px] grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
        <div className="rounded-[20px] w-[35%] top-[-50px] right-[0] desktop:bottom-[150px]">
          <motion.div
            style={{ position: "relative", bottom: transfer }}
            className="w-full h-[80px] mt-[30px] desktop:mt-0 desktop:w-[505px] desktop:h-[345px]"
          >
            <img
              src="/a.230ddebb4d6542d9ff67dd98e812cb97.webp"
              alt="Sarko"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="rounded-[10px] desktop:rounded-[20px] relative left-[-10px] grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
          <motion.div className="w-[90%] top-[70px] desktop:top-[400px] h-[65px] desktop:h-[200px] desktop:w-[300px]">
            <img
              src="/2025-07-05-08-42-52-a3agencypro_.webp"
              alt="Sarko"
              style={{ width: "100%", height: "100%" }}
              className="relative top-[10px] desktop:left-[200px] rounded-[10px] desktop:rounded-[24px] grayscale hover:grayscale-0 transition-all duration-300 relative right-[-35px]"
            />
          </motion.div>
        </div>
      </div>
      <div
        className={`${
          language === "ru" ? "font-geoFont" : "font-mineFont"
        } relative my-4 desktop:my-0 desktop:bottom-0 w-[100%] desktop:w-[1100px] text-[32px] desktop:text-[124px] text-center flex justify-evenly text-white`}
      >
        <motion.p
          style={{
            position: "relative",
            bottom: transfer,
            lineHeight:
              language === "ru"
                ? isMobile
                  ? "40px"
                  : "72px"
                : isMobile
                ? "40px"
                : "108px",
            fontSize:
              language === "ru"
                ? isMobile
                  ? "32px"
                  : "80px"
                : isMobile
                ? "40px"
                : "108px",
            width: isMobile ? "auto" : "950px",
            textAlign: "center",
          }}
        >
          {language === "ru"
            ? "ДУША В КАЖДОМ МГНОВЕНИИ. БЛАГОРОДСТВО В КАЖДОЙ ДЕТАЛИ."
            : language === "ka"
            ? "გულისხმით ნაკარნახევი. ამაღლებულად განმტკიცებული."
            : "LED WITH HEART GROUNDED IN GRACE"}
        </motion.p>
      </div>
      <div className="w-full gap-[2%] flex items-center justify-between relative bottom-4">
        <motion.div
          className="w-[24%] h-[190px] desktop:h-[555px] "
          style={{ position: "relative", bottom: transfer }}
        >
          <img
            src="/firework.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="rounded-[12px]
desktop:rounded-[40px] grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>

        <motion.div className="desktop:left-[350px] mb-[30px] desktop:mb-[30px] desktop:mt-[100px] w-[24%] h-[125px] desktop:h-[430px] ">
          <img
            src="/a.b84ba7a596b23080cbd528be171a31f6.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="rounded-[12px]
desktop:rounded-[40px] relative bottom-[20px] grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>

        <motion.div
          className="w-[28%] h-[150px] rounded-[12px] desktop:h-[445px] desktop:rounded-[40px] overflow-hidden"
          style={{ position: "relative", bottom: transfer }}
        >
          <img
            src="/couple2.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>

        <motion.div className="mb-[50px] desktop:right-[70px]  w-[26%] h-[110px] desktop:h-[365px]">
          <img
            src="/table.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="rounded-[12px]
desktop:rounded-[40px] grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      </div>

      {isMobile && (
        <Link
          style={{ transition: "ease-in 300ms" }}
          href={`/${language}/gallery`}
          className="hover:text-[#135A68] text-white p-2 z-10 flex items-center gap-3 "
        >
          <p
            className={`text-[16px] tracking-wide ${
              language === "ru" ? "font-geoFont" : "font-secondFont"
            }`}
          >
            {language === "ru"
              ? "ВДОХНОВИТЕСЬ НАШИМИ ПРОЕКТАМИ"
              : language === "ka"
              ? "იხილეთ  ჩვენი ნამუშევრები"
              : "SEE OUR WORK"}
          </p>
          <HiArrowSmallRight size={32} />
        </Link>
      )}
    </div>
  );
};
