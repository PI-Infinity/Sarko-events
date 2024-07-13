"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { IoMdArrowDropright } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import Button from "./button";
import Img from "./image";

const Cover = () => {
  // app context
  const { theme } = useAppContext();

  return (
    <div
      style={{ color: theme.text }}
      className="overflow-y-auto h-[85vh] w-[100vw] slide-in-right text-textlight
    desktop:mt-[100px] pt-[108px] pb-14 flex flex-col relative pl-[6.5%]"
    >
      <div className="flex flex-col desktop:flex-row desktop:items-center gap-[16px]">
        <div className="relative w-[72px]">
          <div className="absolute left-[0px] top-[-5px] z-20">
            <ReactCountryFlag
              className="emojiFlag"
              countryCode="GE"
              style={{
                fontSize: 24,
              }}
              aria-label="Georgia"
            />
          </div>
          <div className="relative w-[72px] h-[72px] flex items-center justify-center overflow-hidden rounded-full">
            <Img
              src="/tp.gif"
              alt="Tornike Pirtakhia"
              style={{ width: "100%", aspectRatio: 1 }}
            />
          </div>
        </div>
        <h1 className="text-[48px] leading-[54px] max-w-[50vw] desktop:text-[72px]">
          Tornike Pirtakhia
        </h1>
      </div>
      <div className="flex desktop:items-center gap-[8px] mt-4 desktop:mt-8">
        <RiJavascriptFill size={24} className="italic" />
        <p className="font-custom text-md desktop:text-xl max-w-[80vw]">
          Full Stack JavaScript Engineer
        </p>
      </div>

      <p className="font-custom desktop:ml-4 text-xl leading-[28px] desktop:leading-[32px] italic max-w-[77%] desktop:max-w-[60%]  mt-6 desktop:mt-12">
        "As a Full Stack JavaScript Engineer, I have a proven track record of
        building and launching projects. I excel in frontend and backend
        development, using modern tools to create reliable applications. I enjoy
        learning new skills and am passionate about developing high-quality
        software. I am excited to bring my expertise to new projects and drive
        innovation."
      </p>

      <Link
        href="/offers"
        className="h-12 w-[70vw] desktop:w-80 mt-8 desktop:mt-12 flex items-center gap-4 shadow-md rounded-full"
      >
        <Button
          title="Offers"
          color={theme.secondaryText}
          background={theme.btn}
          icon={<IoMdArrowDropright size={24} />}
          onClick={() => undefined}
        />
      </Link>
    </div>
  );
};

export default Cover;
