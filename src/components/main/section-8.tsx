import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useAppContext } from "@/context/app";

export const Section8 = ({ sY }: any) => {
  const { isMobile } = useAppContext();
  return (
    <div
      className="font-secondFont text-white w-full flex flex-col gap-2 desktop:gap-5 pl-8 desktop:pl-32"
      style={{ position: "absolute", top: isMobile ? "6300px" : "9230px" }}
    >
      <p className="font-mineFont text-[48px]" style={{ lineHeight: "48px" }}>
        IN THEIR WORDS
      </p>
      <p className="text-[18px] w-[90%] desktop:w-[700px]">
        More than just words — these are real insights from the journeys we take
        with those who trust Sarko.
      </p>
      <div
        style={{
          overflowX: "scroll",
          whiteSpace: "nowrap", // აუცილებელია, რომ ელემენტები არ გადახტეს ახალ ხაზზე
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: "350px",
            height: "500px",
            background: "red",
            marginRight: "16px",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "350px",
            height: "500px",
            background: "blue",
            marginRight: "16px",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "350px",
            height: "500px",
            background: "green",
            marginRight: "16px",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "350px",
            height: "500px",
            background: "green",
            marginRight: "16px",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "350px",
            height: "500px",
            background: "green",
            marginRight: "16px",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "350px",
            height: "500px",
            background: "green",
            marginRight: "16px",
          }}
        ></div>
      </div>
    </div>
  );
};
