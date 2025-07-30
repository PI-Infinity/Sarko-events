"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useEffect } from "react";

const Gallery = () => {
  const { theme, loading, gallery, language, activeLanguage } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="desktop:h-[90vh] w-full z-0"
      style={{ color: theme.text, display: loading ? "none" : "flex" }}
    >
      <div className="w-full h-full py-16 desktop:py-0 flex flex-col desktop:flex-row flex-grow items-center justify-center">
        <div
          style={{
            backgroundImage: `url('/images/smk2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: loading ? "none" : "grid",
          }}
          className="gap-[4%] w-full
     text-white
      grid-cols-1 desktop:grid-cols-2 h-full relative px-[4%] desktop:px-0"
        >
          <div
            className="w-full h-full absolute z-0"
            style={{
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
            }}
          />
          <div className="desktop:pl-[10%] desktop:h-[90vh] w-full flex items-center justify-center relative bottom-8">
            <GalleryCard
              href={`/${language}/gallery/photos`}
              defaultImage="/a.IMG_1664.webp"
              label="PHOTOS"
            />
          </div>
          <div className="desktop:pr-[10%] desktop:h-[90vh] w-full flex items-center justify-center relative bottom-8">
            <GalleryCard
              href={`/${language}/gallery/videos`}
              defaultImage="/videocover.webp"
              label="VIDEOS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import { useState } from "react";

const images = [
  "/tamada.webp",
  "/table.webp",
  "/yvareli.webp",
  "/queen.webp",
  "/freesbe.webp",
  "/mtatsminda.webp",
  "/couple.webp",
  "/a.IMG_1664.webp",
]; // your image set

const GalleryCard = ({ href, defaultImage, label }: any) => {
  const { isMobile } = useAppContext();
  const [hovered, setHovered] = useState(false);
  const [currentImg, setCurrentImg] = useState(defaultImage);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (hovered) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setCurrentImg(images[(index + 1) % images.length]);
      }, 500);
    } else {
      setCurrentImg(defaultImage);
      setIndex(0);
    }

    return () => clearInterval(interval);
  }, [hovered, index, defaultImage]);

  return (
    <Link
      href={href}
      className=" w-full h-[250px] desktop:h-[500px] shadow-sm flex items-center justify-center gap-4 relative border-[1.5px] border-white overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden w-full h-full flex ">
        <img
          src={label === "PHOTOS" ? currentImg : defaultImage}
          alt="img"
          className="hover:scale-[1.1]"
          style={{
            aspectRatio: 1,
            zIndex: 0,
            width: "100%",
            transition: "ease-in 300ms",
            objectFit: "cover",
          }}
        />
        {hovered && !isMobile && (
          <strong className="font-mineFont animate-fadeIn absolute bottom-6 left-6 py-2 px-4 text-4xl z-10 bg-black/50 text-white rounded-md transition-opacity duration-300">
            {label}
          </strong>
        )}
        {isMobile && (
          <strong className="font-mineFont animate-fadeIn absolute bottom-4 left-4 py-2 px-4 text-xl z-10 bg-black/50 text-white rounded-md transition-opacity duration-300">
            {label}
          </strong>
        )}
      </div>
    </Link>
  );
};
