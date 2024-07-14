"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import Button from "./button";
import Img from "./image";
import { BounceLoader, MoonLoader } from "react-spinners";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Main = () => {
  // app context
  const { theme, loading, gallery } = useAppContext();

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRefMob = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div
      style={{ color: theme.text }}
      className="h-[85vh] w-[100vw] slide-in-right text-textlight
     pb-14 flex flex-col relative"
    >
      <div className="w-full desktop:hidden mt-[-50px] flex items-center h-[100vh] min-h-[100vh] overflow-hidden">
        <div className="w-full min-h-[100vh] bg-[rgba(0,0,0,0.5)] absolute z-10" />
        <video
          controls={false}
          ref={videoRefMob}
          className={`transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/djsadepig/video/upload/v1720966513/-4356524820746039304_en5e2z.mp4" />
        </video>
        {!isLoaded && (
          <div className="absolute top-28 right-[5%] z-20">
            <MoonLoader size={24} color={theme.text} className="" />
          </div>
        )}
      </div>

      <div className="w-full hidden desktop:flex items-center max-h-[100vh] mt-[4vh] relative">
        <div className="w-full h-full max-h-[100vh] bg-[rgba(0,0,0,0.4)] absolute z-10 top-0" />
        <video
          ref={videoRef}
          className={`transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/djsadepig/video/upload/v1720966527/1720454991652_rmibk2.mp4" />
        </video>
        {!isLoaded && (
          <div className="absolute h-[100vh] z-20 flex w-full">
            <MoonLoader size={40} color={theme.text} className="mt-32 ml-24" />
          </div>
        )}
      </div>

      <div className="z-20 w-full h-full px-[6.5%] absolute top-[12vh] desktop:top-[30vh]">
        <div className="flex desktop:items-center gap-[8px] mt-4 mt-8 desktop:mt-4 ">
          <h1 className="w-[70%] text-[42px] leading-[48px] desktop:leading-[72px] desktop:text-[64px] font-[700] text-shadow-lg">
            Your events management solution
          </h1>
        </div>

        <p className="font-custom desktop:ml-4 text-xl leading-[28px]  desktop:leading-[32px] italic max-w-[90%] desktop:max-w-[60%] mt-6 desktop:mt-8 text-shadow">
          "Sarko is an event planning company that focuses on the uniqueness and
          success of your special moments. We create a space where dreams become
          reality. Our team fulfills your desires and requirements to make every
          event special, impressive, and unforgettable."
        </p>

        <Link
          href="/offers"
          className="h-12 w-full desktop:w-80 mt-12 desktop:mt-16 flex items-center rounded-full"
        >
          <div
            style={{
              backdropFilter: "blu(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            className="py-3 px-6 w-[65%] desktop:w-[100%] rounded-full flex items-center justify-between  shadow-xl gap-4 rounded-full bg-[rgba(255,255,255,0.1)]"
          >
            {/* <MdKeyboardDoubleArrowRight size={24} /> */}
            <h3>Offers</h3>
            <MdKeyboardDoubleArrowRight size={24} />
          </div>
        </Link>
      </div>
      <div
        style={{
          display: loading ? "none" : "flex",
          color: theme.text,
          background: theme.background,
        }}
        className="w-full
    text-white
    flex-col items-center relative z-30 mt-[-30px]"
      >
        <div className=" z-30 w-[100%] py-4 pb-32 slide-in-top flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold py-6 desktop:mb-4 whitespace-nowrap w-full pl-[5%]">
            What We Create
          </h2>
          <div
            style={{ display: loading ? "none" : "grid" }}
            className="slide-in-top w-full w-full
      text-white gap-4
      overflow-y-auto pb-[120px] px-4 grid-cols-1 desktop:grid-cols-3 desktop:px-[2.5%]"
          >
            {gallery?.map((item: any, index: number) => {
              return (
                <Link
                  href={item.link}
                  style={{ background: theme.background2 }}
                  className="w-full h-[300px] shadow-sm rounded-xl flex items-center justify-center
            gap-4 relative"
                  key={index}
                >
                  <div className="relative overflow-hidden rounded-xl w-full h-full flex items-center">
                    <Img
                      src={item.img}
                      alt="img"
                      style={{
                        aspectRatio: 1,
                        zIndex: 0,
                        width: "100%",
                      }}
                    />
                  </div>
                  <strong className="absolute top-4 left-4 py-1 px-3 rounded-full bg-[rgba(0,0,0,0.5)] text-sm">
                    {item.label}
                  </strong>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
