"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import Masonry from "@mui/lab/Masonry";
import { Paper, styled } from "@mui/material";
import { MoonLoader } from "react-spinners";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../../../../firebase";

const Category = () => {
  const { theme, loading, gallery, language, isMobile } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menu: any = [
    {
      id: "weddings",
      title: "WEDDINGS",
      desc: "Why are weddings so special to Sarko? It’s the rush of emotion, the growing anticipation, and the chance to craft a moment that feels timeless. There’s nothing quite like bringing your favorite people together for a beautiful celebration. Whatever your vision may be, Sarko will shape a setting that rises to the moment.",
    },
    {
      id: "corporates",
      title: "CORPORATES",
      desc: "Sarko transforms your company’s mission and vision into a vibrant, memorable experience. From brand launches and annual galas to team gatherings and retreats, we craft events that reflect your identity — all with the distinctive creativity that defines Sarko.",
    },
    {
      id: "teambuildings",
      title: "TEAMBUILDINGS",
      desc: "Sarko reimagines team-building as something truly meaningful — and memorable. Through thoughtfully designed experiences, we spark collaboration, strengthen connections, and bring your team together in ways that last far beyond the day itself.",
    },
    {
      id: "presentations",
      title: "PRESENTATIONS",
      desc: "From keynote speeches to creative showcases, Sarko turns presentations into immersive experiences. We craft environments that elevate your message, captivate your audience, and reflect your brand with clarity and style.",
    },
  ];

  const pathname = usePathname();
  const page: any = pathname?.split("/")[pathname?.split("/")?.length - 1];

  const [load, setLoad] = useState(false);

  const [imageUrls, setImageUrls] = useState<any>([]);

  const getAllImagesFromFolder = async (folderPath: any) => {
    const listRef = ref(storage, folderPath); // e.g., 'presentations/'
    const res = await listAll(listRef);

    const urls = await Promise.all(
      res.items.map((itemRef) => getDownloadURL(itemRef))
    );
    setImageUrls(urls);

    return urls;
  };

  useEffect(() => {
    getAllImagesFromFolder(page);
  }, [page]);

  console.log(imageUrls);

  return (
    <div
      className="w-full z-0 desktop:px-[5%] pb-12 gap-12 flex-col"
      style={{ color: theme.text, display: loading ? "none" : "flex" }}
    >
      <div className="w-full mt-6 px-[5%] desktop:px-[0] desktop:mt-12 flex flex-col gap-2 desktop:gap-2">
        <Link
          href={`/${language}/gallery/photos`}
          className="flex items-center gap-2"
        >
          <MdArrowBack size={32} /> BACK TO GALLERY
        </Link>
        <div>
          <h1 className="text-[40px] desktop:text-[96px] font-mineFont py-6">
            {page?.toUpperCase()}
          </h1>
          <p className="text-[16px] desktop:w-1/2 font-secondFont">
            {menu?.find((i: any) => i.id === page)?.desc}
          </p>
        </div>
      </div>
      <div className="ml-[2%] desktop:ml-0">
        {!load && (
          <div className="w-full h-[400px] flex justify-center py-4">
            <MoonLoader size={24} color="white" />
          </div>
        )}
        <div style={{ opacity: load ? 1 : 0 }}>
          <Masonry columns={isMobile ? 2 : 4}>
            {imageUrls?.length > 0 &&
              imageUrls?.map((item: any, index: any) => {
                if (index === 10) {
                  return (
                    <div key={index}>
                      <img
                        src={item}
                        onLoad={() => {
                          setTimeout(() => setLoad(true), 500);
                        }}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div key={index}>
                      <img src={item} />
                    </div>
                  );
                }
              })}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default Category;
