"use client";
import Button from "@/components/button";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowBack, MdArrowForward, MdCalendarMonth } from "react-icons/md";

const Photos = () => {
  const { theme, loading, gallery, language, isMobile } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menu = [
    { id: "weddings", title: "WEDDINGS" },
    { id: "corporates", title: "CORPORATES" },
    { id: "teambuildings", title: "TEAMBUILDINGS" },
    { id: "presentations", title: "PRESENTATIONS" },
  ];

  const [hovered, setHovered]: any = useState(null);

  return (
    <div
      className="w-full z-0 desktop:px-[5%] pb-12 gap-12 flex-col"
      style={{ color: theme.text, display: loading ? "none" : "flex" }}
    >
      <div className="w-full mt-6 px-[5%] desktop:px-[0] desktop:mt-12 flex flex-col gap-2 desktop:gap-12">
        <Link
          href={`/${language}/gallery`}
          className={`flex items-center gap-2 ${
            language === "ru" ? "font-geoFont" : "font-secondFont"
          }`}
        >
          <MdArrowBack size={32} />{" "}
          {language === "ka"
            ? "გალერეაში დაბრუნება"
            : language === "ru"
            ? "ВЕРНУТЬСЯ В ГАЛЕРЕЮ"
            : "BACK TO GALLERY"}
        </Link>
        <div className="w-full flex flex-col">
          {menu?.map((item: any, index: number) => {
            return (
              <Link
                href={`/${language}/gallery/photos/${item?.id}`}
                key={index}
                style={{ transition: "ease-in 200ms" }}
                className="hover:brightness-[0.7] flex items-center justify-between font-mineFont text-[32px] desktop:text-[72px] border-b-[1px] border-white cursor-pointer py-6 desktop:py-0"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.title}
                {!isMobile && hovered === index && (
                  <MdArrowForward
                    className="animate-fadeIn"
                    style={{
                      transition: "ease-in 200ms",
                    }}
                    size={64}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Photos;
