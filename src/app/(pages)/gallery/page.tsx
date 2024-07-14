"use client";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useEffect } from "react";

const Gallery = () => {
  const { theme, loading, isMobile, gallery } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{ display: loading ? "none" : "flex" }}
      className="slide-in-top w-full h-[95vh] w-full
     pt-[100px] desktop:pt-[140px] text-white
      flex-col items-center gap-4
      overflow-y-auto pb-[140px] px-4"
    >
      {gallery?.map((item: any, index: number) => {
        return (
          <div
            style={{ background: theme.background2 }}
            className="w-full  desktop:w-[60%] shadow-sm rounded-xl flex
          flex-col gap-4 p-4 text-red-500"
            key={index}
          >
            <div className="flex items-center">
              <div
                className="relative overflow-hidden rounded-xl"
                style={{
                  minWidth: isMobile ? "100px" : "250px",
                  minHeight: isMobile ? "100px" : "250px",
                }}
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
              <div
                style={{ color: theme.text }}
                className="desktop:h-[100%] h-[full] p-4 desktop:p-6 rounded-[10px] w-full ml-2 desktop:ml-4 shadow-sm border-[1.5px] border-[rgba(255,255,255,0.02)]
            flex items-center justify-between relative"
              >
                <div className="fle flex-col gap-1">
                  <h4 className="text-xl">{item.label}</h4>
                  <p className="mt-2 text-sm font-custom">{item.description}</p>
                </div>
                <Link
                  href={`${item.link}`}
                  className="mt-4 font-custom desktop:flex gap-4"
                >
                  <p
                    className="rounded-full py-1 px-3 text-sm font-semibold shadow-sm cursor-pointer hover:opacity-[0.8]"
                    style={{
                      background: theme.active,
                      color: theme.secondaryText,
                    }}
                  >
                    Link
                  </p>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
