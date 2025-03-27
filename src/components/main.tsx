"use client";
import { useAppContext, offers } from "@/context/app";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { MdCalendarMonth, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MoonLoader } from "react-spinners";
import Img from "./image";
import Button from "./button";
import { IoMdHeart } from "react-icons/io";
import Image from "next/image";

const Main = () => {
  // app context
  const { theme, loading, gallery, activeLanguage, language } = useAppContext();

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRefMob = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("canplaythrough", () =>
        setIsLoaded(true)
      );
    }
  }, [videoRef]);

  return (
    <div
      style={{ color: theme.text }}
      className="h-full w-[100vw] slide-in-right flex flex-col relative overflow-hidden"
    >
      <div className="w-full desktop:hidden mt-[-50px] flex items-center h-[100vh] overflow-hidden relative">
        <div className="w-full bg-[rgba(0,0,0,0.4)] absolute z-10" />
        <div className="relative overflow-hidden desktop:rounded-xl rounded-md w-full h-full flex items-center">
          <Image
            src="/images/bg.png"
            alt="img"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        {/* <video
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
          <source src="/videos/mob.MP4" />
        </video> */}
        {!isLoaded && (
          <div className="absolute top-28 right-[5%] z-20">
            <MoonLoader size={24} color={theme.text} />
          </div>
        )}
        <div className="z-20 w-full h-full px-[6.5%] absolute top-0 flex flex-col items-center justify-center">
          <div className="flex gap-[8px] mt-32 flex flex-col gap-4 items-center">
            <h1 className="w-[100%] text-[32px] leading-[40px] font-[700] text-shadow-lg text-center">
              {activeLanguage.unite}
            </h1>
            <h1 className="w-[100%] text-[32px] leading-[40px] font-[700] text-shadow-lg text-center">
              {activeLanguage.inspire}
            </h1>
            <h1 className="w-[100%] text-[32px] leading-[40px] font-[700] text-shadow-lg text-center">
              {activeLanguage.celebrate}
            </h1>
          </div>

          <div className="h-12 w-[90%] mt-8 flex items-center rounded-full flex-col">
            <Link
              href={`/${language}/contact`}
              className="h-12 flex items-center justify-center gap-4 bg-white text-black font-bold w-[100%] desktop:w-[400px] border-[1px] border-[rgba(255,255,255,0.2)] rounded-full"
            >
              <Button
                title={activeLanguage.startPlanning}
                background="rgba(255,255,255,1)"
                color={theme.background}
                onClick={() => undefined}
                icon={<MdCalendarMonth size={24} />}
              />
            </Link>
            {/* <div className="mt-4">
              <h3 className="opacity-[0.3] text-white flex items-center gap-2">
                {activeLanguage.loveText} <IoMdHeart color="red" size={24} />
              </h3>
            </div> */}
          </div>
        </div>
      </div>

      <div className="w-full hidden desktop:flex items-center mt-[-6vh] relative">
        <div className="w-full h-full max-h-[120vh] bg-[rgba(0,0,0,0.4)] absolute z-10 top-0" />
        <video
          style={{ transform: "scale(1.1)" }}
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
          <source src="/videos/LastOne.mp4" />
        </video>
        {!isLoaded && (
          <div className="absolute h-[100vh] z-20 flex w-full">
            <MoonLoader size={40} color={theme.text} className="mt-32 ml-24" />
          </div>
        )}
        <div className="z-20 w-full h-full px-[6.5%] absolute top-[30vh] flex flex-col items-center">
          <div className="flex items-center gap-[8px] mt-[18vh]">
            <h1 className="leading-[72px] text-[48px] font-[700] text-shadow-lg">
              {activeLanguage.unite} {activeLanguage.inspire}{" "}
              {activeLanguage.celebrate}{" "}
            </h1>
          </div>

          <div className="h-12 w-[90%] mt-12 flex flex-col items-center justify-center rounded-full">
            <Link
              href={`/${language}/contact`}
              className="h-12 w-[100%] desktop:w-[350px] border-[1px] border-[rgba(255,255,255,0.2)] rounded-full"
            >
              <Button
                title={activeLanguage.startPlanning}
                background="rgba(255,255,255,1)"
                color={theme.background}
                onClick={() => undefined}
                icon={<MdCalendarMonth size={24} />}
              />
            </Link>
            {/* <div className="mt-4">
              <h3 className="opacity-[0.3] text-white flex items-center gap-2">
                {activeLanguage.loveText}
                <IoMdHeart color="red" size={24} />
              </h3>
            </div> */}
          </div>
        </div>
      </div>

      <div
        style={{
          display: loading ? "none" : "flex",
          color: theme.text,
          background: theme.background,
        }}
        className="w-full text-white flex-col items-center relative z-30 mt-[-30px]"
      >
        <div className="z-30 w-[100%] py-12 pt-4 flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold py-4 pb-2 desktop:mb-4 whitespace-nowrap w-full text-center">
            {activeLanguage.whatWeCreate}
          </h2>
          <div
            style={{ display: loading ? "none" : "grid" }}
            className="w-full text-white desktop:gap-4 gap-2 overflow-y-auto grid-cols-2 desktop:grid-cols-3 desktop:px-[2.5%]"
          >
            {gallery?.map((item: any, index: number) => {
              return (
                <Link
                  href={item.link}
                  style={{ background: theme.background2 }}
                  className="w-full  h-[250px] shadow-sm desktop:rounded-xl rounded-md flex items-center justify-center gap-4 relative"
                  key={index}
                >
                  <div className="relative  overflow-hidden desktop:rounded-xl w-full h-full flex items-center">
                    <div
                      style={{ transition: "ease-in 200ms" }}
                      className="w-full h-full hover:scale-[1.1] flex items-cemter justify-center"
                    >
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
                  </div>
                  <strong
                    style={{
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      textAlign: "center",
                    }}
                    className="absolute py-1 px-6 mx-4 rounded-full bg-[rgba(0,0,0,0.4)] text-sm text-center"
                  >
                    {item.label}
                  </strong>
                </Link>
              );
            })}
            <Link
              href={`${language}/whatwecreate/offers`}
              style={{ background: theme.background2 }}
              className="w-full  h-[250px] shadow-sm desktop:rounded-xl rounded-md flex items-center justify-center gap-4 relative"
            >
              <div className="relative  overflow-hidden desktop:rounded-xl w-full h-full flex items-center">
                <div
                  style={{ transition: "ease-in 200ms" }}
                  className="w-full h-full hover:scale-[1.1] flex items-cemter justify-center"
                >
                  <Img
                    src="/we.jpeg"
                    alt="img"
                    style={{
                      aspectRatio: 1,
                      zIndex: 0,
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <strong
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
                className="absolute py-1 px-6 mx-4 rounded-md bg-[rgba(0,0,0,0.4)] text-sm text-center"
              >
                {activeLanguage.offersForNoResidents}
              </strong>
            </Link>
          </div>
          {/* <h2 className="text-2xl font-bold py-4 pb-2 desktop:mb-4 whitespace-nowrap w-full text-center">
            {activeLanguage.offers}
          </h2> */}
          {/* <div
            style={{ display: loading ? "none" : "grid" }}
            className="w-full text-white desktop:gap-4 gap-2 overflow-y-auto grid-cols-1 desktop:grid-cols-3 desktop:px-[2.5%]"
          >
            {offers?.map((item: any, index: number) => {
              return (
                <Link
                  href={"/offers/" + item.value}
                  style={{ background: theme.background2 }}
                  className="w-full  h-[250px] shadow-sm desktop:rounded-xl rounded-md flex items-center justify-center gap-4 relative"
                  key={index}
                >
                  <div className="relative  overflow-hidden desktop:rounded-xl w-full h-full flex items-center">
                    <div
                      style={{ transition: "ease-in 200ms" }}
                      className="w-full h-full hover:scale-[1.1] flex items-cemter justify-center"
                    >
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
                  </div>

                  <div className="p-4 px-2 rounded-xl absolute bottom-4 left-4 flex flex-col gap-2 bg-[rgba(0,0,0,0.5)] max-w-[80%]">
                    <strong className=" px-3 text-lg">
                      {item.label[language]}
                    </strong>
                    <p className=" px-3 text-sm font-[600]">
                      {item.description[language]}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div> */}
          <div className="w-full mt-4 flex items-center justify-center px-4 desktop:mt-4">
            <Link
              href={`/${language}/contact`}
              className="h-12 w-full desktop:w-1/3 border-[1px] border-[rgba(255,255,255,0.2)] rounded-full"
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

export default Main;
