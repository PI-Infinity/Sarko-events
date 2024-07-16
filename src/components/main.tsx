"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useRef, useState } from "react";
import { MdCalendarMonth, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MoonLoader } from "react-spinners";
import Img from "./image";
import Button from "./button";

const Main = () => {
  // app context
  const { theme, loading, gallery, setActive } = useAppContext();

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRefMob = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div
      style={{ color: theme.text }}
      className="h-full min-h-[100vh] w-[100vw] slide-in-right
     flex flex-col relative pb-[120px] overflow-hidden"
    >
      <div className="w-full desktop:hidden mt-[-50px] flex items-center h-[100vh] min-h-[100vh] overflow-hidden relative">
        <div className="w-full min-h-[100vh] bg-[rgba(0,0,0,0.4)] absolute z-10" />
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
          onLoad={() => setIsLoaded(true)}
        >
          <source src="https://res.cloudinary.com/djsadepig/video/upload/v1720966513/-4356524820746039304_en5e2z.mp4" />
        </video>
        {!isLoaded && (
          <div className="absolute top-28 right-[5%] z-20">
            <MoonLoader size={24} color={theme.text} className="" />
          </div>
        )}
        <div className="z-20 w-full h-full px-[6.5%] absolute top-0 flex flex-col items-center justify-center">
          <div className="flex gap-[8px] mt-4 flex flex-col gap-4 items-center">
            <h1 className="w-[100%] text-[32px] leading-[40px] font-[700] text-shadow-lg text-center">
              გაერთიანდი...
            </h1>
            <h1 className="w-[100%] text-[32px] leading-[40px] font-[700] text-shadow-lg text-center">
              იზეიმე...
            </h1>
            <h1 className="w-[100%] text-[32px] leading-[40px] font-[700] text-shadow-lg text-center">
              შთააგონე...
            </h1>
          </div>

          <div className="h-12 w-[90%] mt-12 flex items-center rounded-full">
            <div
              className="h-12 w-[100%] desktop:w-[400px] 
              border-[1px] border-[rgba(255,255,255,0.2)] rounded-full"
            >
              <Button
                title={"Start Planing"}
                background="rgba(255,255,255,1)"
                color={theme.background}
                onClick={() => setActive(true)}
                icon={<MdCalendarMonth size={24} />}
              />
            </div>
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
          onLoad={() => setIsLoaded(true)}
        >
          <source src="https://res.cloudinary.com/djsadepig/video/upload/v1721130443/LastOne_q2sulg.mp4" />
        </video>
        {!isLoaded && (
          <div className="absolute h-[100vh] z-20 flex w-full">
            <MoonLoader size={40} color={theme.text} className="mt-32 ml-24" />
          </div>
        )}
        <div className="z-20 w-full h-full px-[6.5%] absolute top-[30vh] flex flex-col items-center">
          <div className="flex items-center gap-[8px] mt-[15vh]">
            <h1 className="leading-[72px] text-[48px] font-[700] text-shadow-lg">
              გაერთიანდი... იზეიმე... შთააგონე...
            </h1>
          </div>

          <Link
            href="/offers"
            className="h-12 w-80 mt-16 flex items-center rounded-full"
          >
            <div
              style={{
                backdropFilter: "blu(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              className="py-3 px-6 w-[100%] rounded-full flex items-center justify-between  shadow-xl gap-4 rounded-full bg-[rgba(255,255,255,0.3)]"
            >
              {/* <MdKeyboardDoubleArrowRight size={24} /> */}
              <h3>Offers</h3>
              <MdKeyboardDoubleArrowRight size={24} />
            </div>
          </Link>
        </div>
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
        <div className=" z-30 w-[100%] py-4 pb-24 flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold py-4 pb-2 desktop:mb-4 whitespace-nowrap w-full text-center">
            What We Create
          </h2>
          <div
            style={{ display: loading ? "none" : "grid" }}
            className="w-full w-full
      text-white gap-4
      overflow-y-auto pb-[120px] grid-cols-1 desktop:grid-cols-3 px-[2.5%]"
          >
            {gallery?.map((item: any, index: number) => {
              return (
                <Link
                  href={item.link}
                  style={{ background: theme.background2 }}
                  className="w-full h-[250px] shadow-sm rounded-xl flex items-center justify-center
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
                  <strong
                    style={{
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                    className="absolute py-1 px-6 rounded-full bg-[rgba(0,0,0,0.4)] text-sm"
                  >
                    {item.label}
                  </strong>
                </Link>
              );
            })}
            <div className="w-full mt-4 flex items-center justify-center">
              <div
                className="h-12 w-[100%] desktop:w-[400px] 
              border-[1px] border-[rgba(255,255,255,0.2)] rounded-full"
              >
                <Button
                  title={"Start Planing"}
                  background="rgba(255,255,255,1)"
                  color={theme.background}
                  onClick={() => setActive(true)}
                  icon={<MdCalendarMonth size={24} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
