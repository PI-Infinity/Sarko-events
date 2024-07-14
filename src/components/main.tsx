"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import Button from "./button";
import { MdDone } from "react-icons/md";
import Img from "./image";

const Main = () => {
  // app context
  const { theme, loading } = useAppContext();

  return (
    <div
      style={{ color: theme.text }}
      className="h-[85vh] w-[100vw] slide-in-right text-textlight
    desktop:mt-[100px] pt-[100px] pb-14 flex flex-col relative px-[5%]"
    >
      <div>
        <div className="flex desktop:items-center gap-[8px] mt-4 desktop:mt-8">
          <h1 className="text-[48px] leading-[56px] desktop:text-[64px] font-[700]">
            Your events management solution
          </h1>
        </div>

        <p className="font-custom desktop:ml-4 text-xl leading-[28px] desktop:leading-[32px] italic max-w-[90%] desktop:max-w-[60%]  mt-6 desktop:mt-8">
          "Sarko is an event planning company that focuses on the uniqueness and
          success of your special moments. We create a space where dreams become
          reality. Our team fulfills your desires and requirements to make every
          event special, impressive, and unforgettable."
        </p>

        <Link
          href="/offers"
          className="h-12 w-[80%] desktop:w-80 mt-12 desktop:mt-16 flex items-center shadow-md rounded-full"
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
      <div
        style={{ display: loading ? "none" : "flex", color: theme.text }}
        className="w-full h-[95vh]
    pt-[100px] desktop:pt-[140px] text-white
    flex-col items-center
    pb-4"
      >
        <div className="w-[100%] py-4 pb-32 slide-in-top flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold mb-2 desktop:mb-4 whitespace-nowrap w-full">
            What We Create
          </h2>
          <div className="list-disc list-inside w-full flex flex-col items-center gap-2">
            <div className="w-full flex items-center justify-between gap-2">
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px] rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer  hover:opacity-[0.9]"
              >
                <div className="w-[100%] text-red-500 desktop:w-[400px] desktop:min-w-[500px] h-[500px] desktop:h-[600px] overflow-hidden rounded-xl">
                  <Img
                    src="/weddings.png"
                    alt="weddings"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <strong className="absolute py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Weddings
                </strong>
              </div>
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px] rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer  hover:opacity-[0.9]"
              >
                <div className="w-[100%] text-red-500 desktop:w-[400px] desktop:min-w-[500px] h-[500px] desktop:h-[600px] overflow-hidden rounded-xl">
                  <Img
                    src="/corporation.jpg"
                    alt="corporations"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <strong className="absolute py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Corporations
                </strong>
              </div>
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px] rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer hover:opacity-[0.9]"
              >
                <div className="w-[100%] text-red-500 desktop:w-[400px] desktop:min-w-[500px] h-[500px] desktop:h-[600px] overflow-hidden rounded-xl">
                  <Img
                    src="/presentation.png"
                    alt="presentations"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <strong className="absolute py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Company/product presentations
                </strong>
              </div>
            </div>
            <div className="w-full flex items-center justify-between gap-2">
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px] rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer hover:opacity-[0.9] "
              >
                <strong className="absolute py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Conferences
                </strong>
              </div>
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px] rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer  hover:opacity-[0.9]"
              >
                <div className="w-[100%] text-red-500 desktop:w-[400px] desktop:min-w-[500px] h-[500px] desktop:h-[600px] overflow-hidden rounded-xl">
                  <Img
                    src="/teambuilding.jpg"
                    alt="teambuildings"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <strong className="absolute py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Teambuildings
                </strong>
              </div>
              <div
                style={{ transition: "ease-in 200ms" }}
                className="relative w-[100%] h-[200px] rounded-xl shadow-md  flex flex-col items-center justify-center cursor-pointer hover:opacity-[0.9] "
              >
                <strong className="absolute py-1 px-12 rounded-full bg-[rgba(0,0,0,0.5)] text-center text-sm">
                  Festival organizations
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
