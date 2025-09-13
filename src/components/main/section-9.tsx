import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import { useAppContext } from "@/context/app";

export const Section9 = ({ sY }: any) => {
  const { language, isMobile } = useAppContext();
  return (
    <div
      className={`text-[#1D8AA0] w-full flex flex-col h-[600px] items-center justify-center`}
      style={{ position: "absolute", top: isMobile ? "5470px" : "9160px" }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <span
          className={`${
            language === "ru" ? "font-geoFont" : "font-secondFont"
          } text-[18px] desktop:text-xl text-white  desktop:mb-12 text-center`}
          dangerouslySetInnerHTML={{
            __html:
              language === "ru"
                ? `ХОТИТЕ СОЗДАТЬ НЕЧТО ПО-НАСТОЯЩЕМУ УНИКАЛЬНОЕ?<br>
              `
                : language === "ka"
                ? "მზად ხართ თქვენი ოცნება დაუვიწყარ მოგონებად აქციოთ?"
                : "Ready for a vision that dares to be different?",
          }}
        />

        <div
          style={{ transition: "ease-in 300ms" }}
          className="flex flex-col items-center justify-center hover:text-white cursor-pointer"
        >
          <Link
            href={`/${language}/contact`}
            className={`text-[32px] desktop:text-[120px] underline underline-offset-[16px] desktop:underline-offset-[32px] decoration-[3px] ${
              language === "ru" ? "font-geoFont" : "font-mineFont"
            }`}
            style={{ lineHeight: isMobile ? "80px" : "100px" }}
          >
            {language === "ru"
              ? "ДАВАЙТЕ ТВОРИТЬ"
              : language === "ka"
              ? "დაიწყეთ შექმნა"
              : "LET'S CREATE"}{" "}
            !
          </Link>

          <div className="w-full h-[1px]  desktop:mt-4" />
          <span
            style={{ textAlign: "center" }}
            className={`text-xl ${
              language === "ru" ? "font-geoFont" : "font-seondFont"
            } desktop:mt-4`}
            dangerouslySetInnerHTML={{
              __html:
                language === "ru"
                  ? `СДЕЛАЙТЕ ШАГ НАВСТРЕЧУ ИСТОРИИ<br>И МЫ ВОПЛОТИМ ЕЁ В ЖИЗНЬ!
              `
                  : language === "ka"
                  ? "დაიწყეთ თქვენი მოგზაურობა"
                  : "BEGIN YOUR JOURNAY",
            }}
          />
        </div>
      </div>
    </div>
  );
};
