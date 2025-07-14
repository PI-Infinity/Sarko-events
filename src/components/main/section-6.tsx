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
    [isMobile ? 3800 : 5700, isMobile ? 6100 : 8000],
    [0, 150],
    {
      ease: easeInOut,
    }
  );

  return (
    <div
      className="w-full flex flex-col items-center gap-24"
      style={{ position: "absolute", top: isMobile ? "4500px" : "6400px" }}
    >
      <div className="rounded-[40px] absolute right-0 top-40">
        <motion.div
          style={{ position: "relative", bottom: transfer }}
          className="w-[250px] h-[170px] desktop:w-[505px] desktop:h-[345px] rounded-[20px] desktop:rounded-[40px] overflow-hidden"
        >
          <img
            src="/queen.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      </div>
      <motion.div className="w-[125px] h-[170px] rounded-[20px] desktop:w-[250px] desktop:h-[340px] desktop:rounded-[40px] overflow-hidden absolute left-[-12px] desktop:left-[-24px] top-[250px] desktop:top-[400px]">
        <img
          src="/gio.webp"
          alt="Sarko"
          style={{ width: "100%", height: "100%" }}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
      </motion.div>
      <div className="absolute left-[140px] desktop:left-[295px] top-[360px] desktop:top-[250px]">
        <motion.div
          className="w-[180px] h-[220px] rounded-[20px] desktop:rounded-3xl desktop:w-[345px] desktop:h-[440px] desktop:rounded-[40px] overflow-hidden"
          style={{ position: "relative", bottom: transfer }}
        >
          <img
            src="/yvareli.webp"
            alt="Sarko"
            style={{ width: "100%", height: "100%" }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      </div>
      <motion.div className="w-[135px] h-[170px] rounded-[20px] desktop:w-[270px] desktop:h-[340px] desktop:rounded-[40px] overflow-hidden absolute left-[755px] top-[485px]">
        <img
          src="/tamada.webp"
          alt="Sarko"
          style={{ width: "100%", height: "100%" }}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
      </motion.div>
      <motion.div className="w-[125px] h-[95px] rounded-[16px] desktop:rounded-3xl desktop:w-[250px] desktop:h-[190px] rounded-[10px] desktop:rounded-[40px] overflow-hidden absolute right-[12px] desktop:right-[-24px] top-[470px] desktop:top-[660px]">
        <img
          src="/freesbe.webp"
          alt="Sarko"
          style={{ width: "100%", height: "100%" }}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
      </motion.div>
      <div className="rounded-[40px] absolute left-[12px] desktop:left-[-24px] top-[820px] desktop:top-[920px]">
        <motion.div
          className="w-[175px] h-[285px] rounded-[20px] desktop:w-[290px] desktop:h-[575px] desktop:rounded-[40px] overflow-hidden"
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
      <motion.div className="w-[110px] h-[185px] rounded-[16px] desktop:rounded-[20px] desktop:w-[320px] desktop:h-[430px] overflow-hidden desktop:rounded-[40px] absolute left-[210px] desktop:left-[370px] top-[700px] desktop:top-[1215px]">
        <img
          src="/dance.webp"
          alt="Sarko"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
      </motion.div>
      <div className="rounded-[40px] absolute left-[785px] top-[1220px]">
        <motion.div
          className="w-[165px] h-[220px] rounded-[20px] desktop:w-[335px] desktop:h-[445px] desktop:rounded-[40px] overflow-hidden"
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
      <motion.div className="w-[155px] h-[160px] rounded-[20px] desktop:w-[350px] desktop:h-[365px] overflow-hidden desktop:rounded-[40px] absolute right-[30px] desktop:right-[65px] top-[910px] desktop:top-[1200px]">
        <img
          src="/table.webp"
          alt="Sarko"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
      </motion.div>
      <div className="w-[90%] desktop:w-[1100px] text-[48px] desktop:text-[124px] text-center font-mineFont  text-white absolute desktop:left-[20%] top-[640px] desktop:top-[880px]">
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
      {isMobile && (
        <Link
          style={{ transition: "ease-in 300ms" }}
          href={`/${language}/gallery`}
          className="hover:text-[#135A68] text-white p-2 z-10 flex items-center gap-3 absolute top-[1100px]"
        >
          <p className="text-[16px] tracking-wide">SEE OUR WORK</p>
          <HiArrowSmallRight size={32} />
        </Link>
      )}
    </div>
  );
};
