"use client";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useEffect } from "react";

const Gallery = () => {
  const { theme, loading, gallery } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
    </div>
  );
};

export default Gallery;
