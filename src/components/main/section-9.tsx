import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import { useAppContext } from "@/context/app";

export const Section9 = ({ sY }: any) => {
  const { language, isMobile } = useAppContext();
  return (
    <div
      className="font-mineFont text-[#1D8AA0] w-full flex flex-col h-[600px] items-center justify-center"
      style={{ position: "absolute", top: isMobile ? "5470px" : "9160px" }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-[18px] desktop:text-xl text-white font-secondFont  desktop:mb-12 text-center">
          {language === "ru"
            ? `ГОТОВЫ ВОПЛОТИТЬ НЕЧТО ПО-НАСТОЯЩЕМУ УНИКАЛЬНОЕ?`
            : language === "ka"
            ? "მზად ხართ თქვენი ოცნება დაუვიწყარ მოგონებად აქციოთ?"
            : "Ready for a vision that dares to be different?"}
        </span>
        <div
          style={{ transition: "ease-in 300ms" }}
          className="flex flex-col items-center justify-center hover:text-white cursor-pointer"
        >
          <Link
            href={`/${language}/contact`}
            className="text-[32px] desktop:text-[120px] underline underline-offset-[16px] desktop:underline-offset-[32px] decoration-[3px]"
            style={{ lineHeight: isMobile ? "80px" : "100px" }}
          >
            {language === "ru"
              ? "ДАВАЙТЕ ТВОРИТЬ"
              : language === "ka"
              ? "დაიწყეთ შექმნა"
              : "LET'S CREATE"}{" "}
            .
          </Link>

          <div className="w-full h-[1px]  desktop:mt-4" />
          <span className="text-xl font-secondFont desktop:mt-4">
            {language === "ru"
              ? "СДЕЛАЙТЕ ШАГ НАВСТРЕЧУ ИСТОРИИ"
              : language === "ka"
              ? "დაიწყეთ თქვენი მოგზაურობა."
              : "BEGIN YOUR JOURNAY"}
          </span>
        </div>
      </div>
    </div>
  );
};
