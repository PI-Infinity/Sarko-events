"use client";
import Button from "@/components/button";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowBack, MdCalendarMonth } from "react-icons/md";
import { MoonLoader } from "react-spinners";

const Videos = () => {
  const { theme, loading, gallery, language, activeLanguage } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    { id: "1100285609", title: "" },
    { id: "1100277440", title: "" },
    { id: "1100276059", title: "" },
    // { id: "1101515667", title: "" },
    { id: "1101516169", title: "" },
  ];

  const [load, setLoad] = useState(false);

  return (
    <div
      className="w-full z-0 desktop:px-[5%] gap-12 flex-col"
      style={{ color: theme.text, display: loading ? "none" : "flex" }}
    >
      <div className="w-full mt-6 px-[5%] desktop:px-[0] desktop:mt-12 flex flex-col gap-2 desktop:gap-12">
        <Link href={`/${language}/gallery`} className="flex items-center gap-2">
          <MdArrowBack size={32} /> BACK TO GALLERY
        </Link>
        <div>
          <h1 className="text-[96px] font-mineFont">VIDEO</h1>
          <p className="text-[16px] desktop:w-1/2 font-secondFont">
            Our events may feel like something out of a dream, but we’re
            grounded in the real work it takes to get there. At SARKO, we
            celebrate the behind-the-scenes just as much as the final
            experience. Take a peek into the process that powers the magic.
          </p>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-white desktop:py-16 grid grid-cols-1 desktop:grid-cols-2">
        {!load && (
          <div className="w-full flex justify-center py-4 mt-12">
            <MoonLoader size={24} color="white" />
          </div>
        )}
        {videos?.map((item: any, index: number) => (
          <div
            key={index}
            style={{ opacity: load ? 1 : 0 }}
            className={`py-12 desktop:p-12 ${
              index % 2 === 0 ? "desktop:border-r border-white" : ""
            }
        ${index < videos.length - 2 ? "border-b border-white" : ""}`}
          >
            {item?.id?.length > 0 && (
              <div
                className={`relative aspect-video overflow-hidden
            `}
              >
                <iframe
                  onLoad={() => {
                    setTimeout(() => setLoad(true), 500);
                  }}
                  src={`https://player.vimeo.com/video/${item.id}?title=0&byline=0&portrait=0&badge=0`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  title={`Vimeo Video ${index}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
