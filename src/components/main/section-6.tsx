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
      className="w-full flex flex-col items-center gap-24"
      style={{ position: "absolute", top: isMobile ? "4400px" : "6700px" }}
    >
      <div className="w-full flex items-center justify-between relative">
        <motion.div className="absolute left-[-30px] desktop:mt-[50px] w-[100px] h-[120px] rounded-[10px] desktop:w-[250px] desktop:h-[340px] desktop:rounded-[20px] overflow-hidden">
          <img
            src="/dance.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%" }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
        <div className="">
          <motion.div
            className="absolute left-[90px] desktop:left-[300px] w-[100px] h-[160px] rounded-[10px] desktop:rounded-3xl desktop:w-[345px] desktop:h-[500px] desktop:rounded-[40px] overflow-hidden"
            style={{ position: "relative", bottom: transfer }}
          >
            <img
              src="/a.IMG_1664.webp"
              alt="Sarko"
              style={{ width: "100%", height: "100%" }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        </div>
        <motion.div className="absolute right-[120px] desktop:right-[650px] top-[40px] desktop:top-[200px] w-[90px] h-[120px] rounded-[10px] desktop:w-[270px] desktop:h-[340px] desktop:rounded-[20px] overflow-hidden">
          <img
            src="/f.image00033.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%" }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
        <div className="rounded-[20px] absolute top-[-50px] right-[0] desktop:bottom-[150px]">
          <motion.div
            style={{ position: "relative", bottom: transfer }}
            className="w-[120px] h-[60px] mt-[30px] desktop:mt-0 desktop:w-[505px] desktop:h-[345px] rounded-[10px] desktop:rounded-[20px] overflow-hidden"
          >
            <img
              src="/a.230ddebb4d6542d9ff67dd98e812cb97.webp"
              alt="Sarko"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        </div>
        <motion.div className="absolute right-[-10px] desktop:right-[-20px] top-[70px] desktop:top-[400px] w-[100px] h-[65px] rounded-[6px] desktop:rounded-[24px] desktop:w-[270px] desktop:h-[200px] rounded-[10px] desktop:rounded-[40px] overflow-hidden">
          <img
            src="/2025-07-05-08-42-52-a3agencypro_.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%" }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      </div>
      <div className="relative my-4 desktop:my-0 bottom-[50px] desktop:bottom-0 w-[90%] desktop:w-[1100px] text-[32px] desktop:text-[124px] text-center font-mineFont  text-white">
        <motion.p
          style={{
            position: "relative",
            bottom: transfer,
            lineHeight: isMobile ? "48px" : "100px",
          }}
        >
          LED WITH HEART GROUNDED IN GRACE
        </motion.p>
      </div>
      <div className="w-full flex items-center justify-between relative bottom-8">
        <div className="rounded-[40px] absolute left-[-30px]">
          <motion.div
            className="w-[100px] h-[170px] rounded-[20px] desktop:w-[290px] desktop:h-[555px] desktop:rounded-[40px] overflow-hidden"
            style={{ position: "relative", bottom: transfer }}
          >
            <img
              src="/firework.webp"
              alt="Sarko"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        </div>
        <motion.div className="absolute left-[90px] desktop:left-[350px] mb-[30px] desktop:mb-[30px] desktop:mt-[400px] w-[100px] h-[175px] rounded-[16px] desktop:rounded-[20px] desktop:w-[320px] desktop:h-[430px] overflow-hidden desktop:rounded-[40px]">
          <img
            src="/a.b84ba7a596b23080cbd528be171a31f6.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
        <div className="rounded-[40px] absolute right-[110px] desktop:right-[570px] desktop:mt-[500px]">
          <motion.div
            className="w-[105px] h-[150px] rounded-[20px] desktop:w-[335px] desktop:h-[445px] desktop:rounded-[40px] overflow-hidden"
            style={{ position: "relative", bottom: transfer }}
          >
            <img
              src="/couple2.webp"
              alt="Sarko"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        </div>
        <motion.div className="absolute right-[-20px] mb-[50px] desktop:mb-[50px] desktop:right-[70px] desktop:mt-[390px] w-[115px] h-[110px] rounded-[20px] desktop:w-[350px] desktop:h-[365px] overflow-hidden desktop:rounded-[40px]">
          <img
            src="/table.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      </div>

      {isMobile && (
        <Link
          style={{ transition: "ease-in 300ms" }}
          href={`/${language}/gallery`}
          className="hover:text-[#135A68] text-white p-2 z-10 flex items-center gap-3 "
        >
          <p className="text-[16px] tracking-wide">SEE OUR WORK</p>
          <HiArrowSmallRight size={32} />
        </Link>
      )}
    </div>
  );
};
