"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

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
      <div className="flex items-center gap-4 mt-4">
        <div
          className={` ${
            language !== "en"
              ? "hover:opacity-[0.8] cursor-pointer"
              : "cursor-default"
          }`}
        >
          <ReactCountryFlag
            className="emojiFlag"
            onClick={() => setLanguage("en")}
            countryCode="GB"
            style={{
              opacity: language === "en" ? 1 : 0.5,
              fontSize: 24,
            }}
            aria-label="GB"
          />
        </div>
        <div
          className={` ${
            language !== "ka"
              ? "hover:opacity-[0.8] cursor-pointer"
              : "cursor-default"
          }`}
        >
          <ReactCountryFlag
            className="emojiFlag"
            onClick={() => setLanguage("ka")}
            countryCode="GE"
            style={{
              opacity: language === "ka" ? 1 : 0.5,
              fontSize: 24,
            }}
            aria-label="Georgia"
          />
        </div>

        <div
          className={` ${
            language !== "en"
              ? "hover:opacity-[0.8] cursor-pointer"
              : "cursor-default"
          }`}
        >
          <ReactCountryFlag
            className="emojiFlag"
            onClick={() => setLanguage("ru")}
            countryCode="RU"
            style={{
              opacity: language === "ru" ? 1 : 0.5,
              fontSize: 24,
            }}
            aria-label="RU"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
