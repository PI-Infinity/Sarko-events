"use client";
import { useAppContext } from "@/context/app";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeadRoom from "react-headroom";
import { CiMenuFries } from "react-icons/ci";
import Search from "./search";
import { useEStoreAppContext } from "../context/app";
import { FaBagShopping, FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  // theme
  const { theme, loading, menuItems, setMobileMenu, isMobile } =
    useAppContext();

  // use e store context
  const { search, setSearch } = useEStoreAppContext();

  return (
    <HeadRoom
      downTolerance={10}
      upTolerance={10}
      className="fixed w-full z-10"
      style={{
        display: loading ? "none" : "flex",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <ProgressBar
        height="0.25rem"
        color="#f7fbff"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <header
        className="w-full h-full
      flex items-center justify-between
      py-4 desktop:py-[20px] px-[5%] border-b-[1.5px] border-b-[rgba(255,255,255,0.1)]"
      >
        <Link href="/" className="flex items-center gap-4 scale-up">
          <div
            className={`${
              theme.id === "light" &&
              "h-[48px] w-[48px] flex items-center justify-center rounded-full"
            }`}
            style={{ background: theme.id === "light" ? theme.text : "none" }}
          >
            <Image
              src="/logo-white.png"
              width={theme.id === "light" ? 36 : 42}
              height={theme.id === "light" ? 36 : 42}
              alt="tp"
              color={theme.text}
            />
          </div>
          <h1
            style={{ color: theme.text }}
            className="text-[32px] text-textlight cursor-pointer whitespace-nowrap"
          >
            E-Store
          </h1>
        </Link>
        <div className="w-3/5 hidden desktop:flex slide-in-left">
          <Search search={search} setSearch={setSearch} />
        </div>
        {/* <div className="flex items-center gap-4 py-1 px-3 rounded-full bg-[rgba(255,255,255,0.1)]">
          <div
          // className={` ${
          //   language !== "en"
          //     ? "hover:opacity-[0.8] cursor-pointer"
          //     : "cursor-default"
          // }`}
          >
            <ReactCountryFlag
              className="emojiFlag"
              // onClick={() => setLanguage("en")}
              countryCode="GB"
              style={{
                // opacity: language === "en" ? 1 : 0.5,
                fontSize: 20,
              }}
              aria-label="GB"
            />
          </div>
          <div
          // className={` ${
          //   language !== "ka"
          //     ? "hover:opacity-[0.8] cursor-pointer"
          //     : "cursor-default"
          // }`}
          >
            <ReactCountryFlag
              className="emojiFlag"
              // onClick={() => setLanguage("ka")}
              countryCode="GE"
              style={{
                // opacity: language === "ka" ? 1 : 0.5,
                fontSize: 20,
              }}
              aria-label="Georgia"
            />
          </div>
        </div> */}
        <div className="flex items-center gap-8">
          <div className="">
            <FaBagShopping color={theme.text} size={24} />
          </div>
          <div className="">
            <FaUser color={theme.text} size={23} />
          </div>
          <div className="desktop:hidden" onClick={() => setMobileMenu(true)}>
            <CiMenuFries color={theme.text} size={28} />
          </div>
        </div>
      </header>
    </HeadRoom>
  );
};

export default Header;
