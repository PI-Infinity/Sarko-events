"use client";
import { useState } from "react";
import Button from "@/components/button";
import Img from "@/components/image";
import { useAppContext, offers } from "@/context/app";
import Link from "next/link";
import { useEffect } from "react";
import { MdCalendarMonth } from "react-icons/md";

const Gallery = () => {
  const { theme, loading, activeLanguage, language } = useAppContext();

  const [openDetails, setOpenDetails] = useState<any>(null);

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
        className="fixed desktop:hidden bottom-0 left-0 py-6 z-50 bg-[] w-full mt-4 flex items-center justify-center px-4 desktop:mt-4"
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
          {offers?.map((item: any, index: number) => {
            return (
              <Link
                href={`/offers${item.value}`}
                onClick={() => setOpenDetails(item)}
                style={{ background: theme.background2 }}
                className="w-full shadow-sm rounded-xl flex items-center justify-center
           gap-4 relative h-[300px]"
                key={index}
              >
                <div className="relative overflow-hidden rounded-xl w-full h-full flex cursor-pointer hover:opacity-[0.9]">
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
                <strong className="rounded-md absolute top-4 right-4 py-1 px-3 bg-[rgba(0,0,0,0.5)] text-lg">
                  {item.price}$
                </strong>
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

<style>
  {`
    @keyframes slideIn {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `}
</style>;
