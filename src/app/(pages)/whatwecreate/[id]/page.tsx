"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuGalleryVertical } from "react-icons/lu";
import Offers from "./offers";

const Page = () => {
  const pathname = usePathname();
  const { loading } = useAppContext();

  return (
    <div
      style={{ display: loading ? "none" : "flex" }}
      className="w-full flex-col items-center pt-[90px] desktop:pt-[100px] gap-2 slide-in-right desktop:overflow-hidden pb-8 px-0 desktop:px-[5%] relative"
    >
      <Offers type={pathname.split("/")[2]} />
      <div className="grid grid-cols-2 desktop:grid-cols-4 gap-4 px-[2.5%]">
        {events
          ?.filter((i: any) => i.type === pathname.split("/")[2])
          .map((item: any, index: number) => {
            return (
              <Link
                href={pathname + "/" + item.event}
                className="w-full aspect-square overflow-hidden rounded-xl hover:opacity-[0.9] cursor-pointer relative"
                key={index}
                style={{ transition: "ease-in 200ms" }}
              >
                <img
                  src={item.cover}
                  alt={item.type}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    aspectRatio: 1,
                  }}
                />
                <div className="absolute z-20 bottom-3 right-3">
                  <LuGalleryVertical size={20} color="white" />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Page;

const events = [
  { event: "1", type: "weddings", cover: "/images/weddings/IMG_1654.PNG" },
  { event: "2", type: "weddings", cover: "/images/weddings/IMG_1697.JPG" },
  { event: "3", type: "weddings", cover: "/images/weddings/IMG_1704.JPG" },
  { event: "4", type: "weddings", cover: "/images/weddings/IMG_1748.PNG" },
  { event: "5", type: "weddings", cover: "/images/weddings/IMG_1786.PNG" },
  { event: "6", type: "weddings", cover: "/images/weddings/IMG_1791.PNG" },
  { event: "7", type: "weddings", cover: "/images/weddings/IMG_2051.PNG" },
  { event: "8", type: "weddings", cover: "/images/weddings/IMG_2081.JPG" },
  {
    event: "1",
    type: "corporations",
    cover: "/images/corporates/IMG_0649 latest.jpg",
  },
  {
    event: "2",
    type: "corporations",
    cover: "/images/corporates/IMG_1624.png",
  },
  {
    event: "3",
    type: "corporations",
    cover: "/images/corporates/IMG_1634.png",
  },
  {
    event: "4",
    type: "corporations",
    cover: "/images/corporates/IMG_1741.png",
  },
  {
    event: "5",
    type: "corporations",
    cover: "/images/corporates/IMG_1759.png",
  },
  {
    event: "6",
    type: "corporations",
    cover: "/images/corporates/IMG_2114.jpg",
  },
  {
    event: "1",
    type: "presentations",
    cover: "/images/presentations/IMG_1617.PNG",
  },
  {
    event: "2",
    type: "presentations",
    cover: "/images/presentations/IMG_1664.PNG",
  },
  {
    event: "1",
    type: "teambuildings",
    cover: "/images/teambuildings/IMG_2267.jpg",
  },
];
