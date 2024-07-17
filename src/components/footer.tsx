"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import Img from "./image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  const { loading, theme, language, setLanguage } = useAppContext();
  return (
    <div
      style={{
        display: loading ? "none" : "flex",
        background: theme.background,
      }}
      className="z-40 px-[5%] pt-8 pb-6 w-full
      border-t-[0.5px] border-t-[rgba(255,255,255,0.1)]
      flex-col"
    >
      <div className="w-full flex flex-col desktop:flex-row desktop:items-center desktop:justify-between gap-12">
        <Link
          href="/"
          className="desktop:w-1/3 flex items-center gap-4 scale-up cursor-pointer"
        >
          <div className="relative w-[100px] h-[35px] flex items-center justify-center">
            <Img
              src={theme.id === "light" ? "/logo-black.png" : "/sarko-logo.png"}
              alt="Sarko"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Link>
        <div className="desktop:w-1/3 flex items-center desktop:justify-center gap-4">
          <div>
            <FaFacebook color={theme.text} size={20} />
          </div>
          <div>
            <FaInstagram color={theme.text} size={20} />
          </div>
          <div>
            <FaTiktok color={theme.text} size={20} />
          </div>
          <div>
            <FaYoutube color={theme.text} size={20} />
          </div>
          <div>
            <FaTelegram color={theme.text} size={20} />
          </div>
          <div>
            <FaWhatsapp color={theme.text} size={20} />
          </div>
          <div>
            <FaLinkedin color={theme.text} size={20} />
          </div>
        </div>
        <div className="desktop:w-1/3 flex justify-end desktop:items-center flex-col desktop:flex-row gap-2 desktop:gap-8">
          <div
            onClick={() => setLanguage("en")}
            style={{
              opacity: language === "en" ? 1 : 0.5,
              fontSize: "14px",
              color: theme.text,
            }}
            className={` ${
              language !== "en"
                ? "hover:opacity-[0.8] cursor-pointer"
                : "cursor-default"
            }`}
          >
            English
          </div>
          <div
            className={` ${
              language !== "ka"
                ? "hover:opacity-[0.8] cursor-pointer"
                : "cursor-default"
            }`}
            onClick={() => setLanguage("ka")}
            style={{
              opacity: language === "ka" ? 1 : 0.5,
              fontSize: "14px",
              color: theme.text,
            }}
          >
            ქართული
          </div>

          <div
            className={` ${
              language !== "en"
                ? "hover:opacity-[0.8] cursor-pointer"
                : "cursor-default"
            }`}
            onClick={() => setLanguage("ru")}
            style={{
              opacity: language === "ru" ? 1 : 0.5,
              fontSize: "14px",
              color: theme.text,
            }}
          >
            Русский
          </div>
        </div>
      </div>

      <div
        style={{ color: theme.text }}
        className="z-10 flex items-center mt-auto pt-12"
      >
        &copy; Copyright
      </div>
    </div>
  );
};
