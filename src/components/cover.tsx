"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import Button from "./button";

const Cover = () => {
  // app context
  const { theme } = useAppContext();

  return (
    <div
      style={{ color: theme.text }}
      className="h-[85vh] w-[100vw] slide-in-right text-textlight
    desktop:mt-[100px] pt-[100px] pb-14 flex flex-col relative px-[5%]"
    >
      <div className="flex desktop:items-center gap-[8px] mt-4 desktop:mt-8">
        <h1 className="text-[48px] leading-[56px] desktop:text-[64px] font-[700]">
          Your events management solution
        </h1>
      </div>

      <p className="font-custom desktop:ml-4 text-xl leading-[28px] desktop:leading-[32px] italic  desktop:max-w-[60%]  mt-6 desktop:mt-8">
        "Sarko is an event planning company that focuses on the uniqueness and
        success of your special moments. We create a space where dreams become
        reality. Our team fulfills your desires and requirements to make every
        event special, impressive, and unforgettable."
      </p>

      <Link
        href="/offers"
        className="h-12 w-[80%] desktop:w-80 mt-14 desktop:mt-16 flex items-center shadow-md rounded-full"
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
