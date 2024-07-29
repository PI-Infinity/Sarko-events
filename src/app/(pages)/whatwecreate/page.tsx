"use client";
import Button from "@/components/button";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useEffect } from "react";
import { MdCalendarMonth } from "react-icons/md";

const Gallery = () => {
  const { theme, loading, gallery, activeLanguage } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="flex-1"
      style={{ color: theme.text, display: loading ? "none" : "flex" }}
    >
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))",
        }}
        className="fixed desktop:hidden bottom-0 left-0 py-4 z-50 bg-[] w-full mt-4 flex items-center justify-center px-4 desktop:mt-4"
      >
        <Link
          href="/contact"
          className=" h-12 w-full desktop:w-1/3 border-[1px] border-[rgba(255,255,255,0.2)] rounded-full"
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
      <div className="w-full h-full flex-grow pt-[94px] desktop:pt-[120px] pb-8">
        <div
          style={{ display: loading ? "none" : "grid" }}
          className="slide-in-right w-full
     text-white gap-4
      px-2 grid-cols-1 desktop:grid-cols-3 desktop:px-[5%]"
        >
          {gallery?.map((item: any, index: number) => {
            return (
              <Link
                href={item.link}
                style={{ background: theme.background2 }}
                className="w-full shadow-sm rounded-xl flex items-center justify-center
           gap-4 relative h-[300px]"
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
        <div className="hidden my-16 z-50 bg-[] w-full desktop:flex items-center justify-center px-4">
          <Link
            href="/contact"
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
  );
};

export default Gallery;
