"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import {
  FaFacebook,
  FaInstagram,
  FaLanguage,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { MdLanguage } from "react-icons/md";

const MobileMenu = () => {
  const { menuItems, theme, mobileMenu, setMobileMenu, language, setLanguage } =
    useAppContext();
  const pathname = usePathname();

  return (
    <div
      style={{
        backdropFilter: "blur(100px)",
        WebkitBackdropFilter: "blur(100px)",
        transition: "ease-in 200ms",
      }}
      onClick={() => setMobileMenu(false)}
      className={`fixed z-30 top-0 ${
        mobileMenu ? "right-0 opacity-[1]" : "right-[-100%] opacity-[0.5]"
      } h-screen w-full slide-in-left desktop:hidden flex flex-col gap-[48px]
    text-textlight text-[16px] font-custom font-[600] px-[10%] pt-[40px]`}
    >
      <div className="flex flex-col gap-4 w-full">
        {menuItems.map((item: any) => {
          return (
            <Link href={item.path} key={item.path}>
              <h4
                style={{
                  color: pathname === item.path ? theme.active : theme.text,
                  transition: "ease-in 200ms",
                }}
                className={`cursor-pointer hover:opacity-[1] ${
                  pathname === item.path ? "opacity-1" : "opacity-[0.5]"
                }`}
              >
                {item.label}
              </h4>
            </Link>
          );
        })}
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex desktop:items-center flex-col desktop:flex-row gap-2 desktop:gap-8"
      >
        <div
          onClick={() => setLanguage("en")}
          style={{
            opacity: language === "en" ? 1 : 0.5,
            fontSize: "16px",
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
            fontSize: "16px",
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
            fontSize: "16px",
            color: theme.text,
          }}
        >
          Русский
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="desktop:w-1/3 flex items-center desktop:justify-center gap-4"
      >
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
    </div>
  );
};

export default MobileMenu;
