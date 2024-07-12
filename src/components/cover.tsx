"use client";
import React from "react";
import { RiJavascriptFill } from "react-icons/ri";
import Button from "./button";
import { IoMdArrowDropright } from "react-icons/io";
import { useAppContext } from "@/context/app";
import Image from "next/image";
import Link from "next/link";

const Cover = () => {
  // app context
  const { theme } = useAppContext();

  return (
    <div
      className="overflow-y-auto h-[85vh] w-[100vw] slide-in-right text-textlight
    desktop:mt-[100px] pt-[116px] pb-12 flex flex-col relative pl-[6.5%]"
    >
      <div className="flex flex-col desktop:flex-row desktop:items-center gap-[24px]">
        <Image
          className="object-cover rounded-full"
          src="/tp.jpg"
          width={72}
          height={72}
          alt="img"
        />
        <h1 className="text-[48px] leading-[56px] max-w-[50vw] desktop:text-[72px]">
          Tornike Pirtakhia
        </h1>
      </div>
      <div className="flex desktop:items-center gap-[8px] mt-4 desktop:mt-8">
        <RiJavascriptFill size={24} className="italic" />
        <p className="font-custom text-md desktop:text-xl max-w-[80vw]">
          Full Stack JavaScript Engineer
        </p>
      </div>

      <p className="font-custom desktop:ml-4 text-xl leading-[32px] italic max-w-[77%] desktop:max-w-[60%]  mt-6 desktop:mt-12">
        "As a Full Stack JavaScript Engieneer, I have a proven track record of
        building and launching projects. I excel in frontend and backend
        development, using modern tools to create reliable applications. I enjoy
        learning new skills and am passionate about developing high-quality
        software. I am excited to bring my expertise to new projects and drive
        innovation."
      </p>
      <Link
        href="/offers"
        className="h-12 w-[70vw] desktop:w-80 mt-12 flex items-center gap-4"
      >
        <Button
          title="Offers"
          color={theme.text}
          background={theme.fill}
          icon={<IoMdArrowDropright size={24} />}
          onClick={() => undefined}
        />
      </Link>
    </div>
  );
};

export default Cover;
