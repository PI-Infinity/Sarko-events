"use client";
import { useAppContext } from "@/context/app";
import React from "react";
import HeadRoom from "react-headroom";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdList } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const Header = () => {
  // theme
  const { theme, loading, menuItems, setMobileMenu } = useAppContext();

  const pathname = usePathname();

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
        <Link href="/" className="flex items-center gap-4 scale-up ">
          <Image
            src="/logo-white.png"
            width={48}
            height={48}
            alt="tp"
            color={theme.text}
          />
          <h1
            style={{ color: theme.text }}
            className="text-[32px] text-textlight cursor-pointer whitespace-nowrap"
          >
            TP-Showcase
          </h1>
        </Link>

        <div className="hidden slide-in-left desktop:flex items-center gap-[48px] text-textlight text-[16px] font-custom font-[600]">
          {menuItems.map((item: any) => {
            return (
              <Link href={item.path} key={item.path}>
                <h4
                  style={{
                    color: theme.text,
                    borderColor: theme.text,
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
        <div className="desktop:hidden" onClick={() => setMobileMenu(true)}>
          <CiMenuFries color={theme.text} size={28} />
        </div>
      </header>
    </HeadRoom>
  );
};

export default Header;
