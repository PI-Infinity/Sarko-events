"use client";
import React from "react";
import { useState } from "react";
import { useAppContext, offers } from "@/context/app";
import { usePathname } from "next/navigation";
import Img from "@/components/image";
import Link from "next/link";
import Button from "@/components/button";
import { MdCalendarMonth } from "react-icons/md";

const page = () => {
  const pathname = usePathname();
  const { loading, theme, activeLanguage, language } = useAppContext();
  const [loadingImgs, setLoadingImgs] = useState();
  const openDetails: any = offers?.find(
    (o: any) => o.value === "/" + pathname?.split("/")[2]
  );
  return (
    <div className="desktop:pt-32 pt-20 pb-4 flex justify-center items-center bg-[rgba(0,0,0,0.8)] backdrop-blur-[20px] transition-transform duration-300 ease-in-out">
      {/* Content Container */}
      <div className="desktop:bg-[#111] pb-4 overflow-hidden shadow-lg desktop:max-w-4xl w-full h-auto relative flex flex-col desktop:rounded-xl">
        {/* Image */}
        <div className="overflow-hidden w-full max-h-96 flex">
          <Img
            src={openDetails?.img}
            alt="img"
            style={{
              aspectRatio: 1,
              zIndex: 0,
              width: "100%",
            }}
          />
        </div>

        {/* Details */}
        <div className="mt-6 text-start flex flex-col gap-4 px-6 py-2">
          <h2 className="text-2xl font-bold text-white">
            {openDetails?.label[language]}
          </h2>
          <p className="text-white">{openDetails?.description[language]}</p>

          {/* Details List */}
          <ul className="text-white space-y-2">
            {openDetails?.details[language]?.map((detail: any, i: any) => (
              <li key={i} className="text-start">
                {detail}
              </li>
            ))}
          </ul>

          {/* Bottom Button (Stays Inside) */}
          <div className="mt-8 w-full flex items-center justify-start">
            <Link
              href={"/contact?offer=" + openDetails?.value}
              className="h-12 w-full desktop:w-[400px] border-[1px] border-[rgba(255,255,255,0.2)] rounded-full"
            >
              <Button
                title={activeLanguage.startPlanning}
                background="rgba(255,255,255,1)"
                color={theme.background}
                onClick={() => undefined}
                icon={<MdCalendarMonth size={24} />}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
