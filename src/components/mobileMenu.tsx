"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileMenu = () => {
  const { menuItems, theme, mobileMenu, setMobileMenu } = useAppContext();
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
      } h-screen w-full slide-in-left desktop:hidden flex flex-col items-center gap-[48px]
    text-textlight text-[16px] font-custom font-[600]`}
    >
      <div className="flex flex-col p-8 gap-4 w-full h-full">
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
    </div>
  );
};

export default MobileMenu;
