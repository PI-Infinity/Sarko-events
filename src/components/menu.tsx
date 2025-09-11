"use client";
import { useAppContext } from "@/context/app";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

const Menu = () => {
  const {
    isMobile,
    menuItems,
    theme,
    openMenu,
    setOpenMenu,
    language,
    setLanguage,
  } = useAppContext();
  const pathname = usePathname();
  const router = useRouter();
  const changeLanguage = (lang: string) => {
    localStorage.setItem("sarko-events:language", lang);
    Cookies.set("language", lang, { expires: 30, path: "/" }); // 🔥 ქუქიში ვწერთ ენას
    // 2. შეცვალე URL → ჩანაცვლებით
    const segments = pathname.split("/"); // ['', 'ka', 'contact']
    segments[1] = lang; // შეცვალე ენა
    const newPath = segments.join("/");

    // 3. გადამისამართება ახალ ენაზე
    router.push(newPath);
  };
  if (openMenu) {
    return (
      <div
        style={{
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(100px)",
          transition: "ease-in 300ms",
        }}
        className={`animate-fadeIn fixed z-50 top-0 right-[0] opacity-[1]
        h-screen w-[100vw] flex flex-col
      text-textlight text-[16px] font-custom font-[600]`}
      >
        <div className="z-10 cursor-pointer text-white flex items-center gap-3 w-full justify-end px-4 desktop:px-14 py-6 mt-2 border-y-[1px] border-white">
          <div
            onClick={(e) => e.stopPropagation()}
            className="mr-auto flex items-center gap-4 desktop:gap-8"
          >
            <div
              onClick={() => changeLanguage("en")}
              style={{
                opacity: language === "en" ? 1 : 0.5,
                fontSize: "14px",
                color: theme.text,
              }}
              className={` ${
                language !== "en"
                  ? "hover:brightness-[0.8] cursor-pointer font-secondFont"
                  : "cursor-default"
              }`}
            >
              English
            </div>
            <div
              className={` ${
                language !== "ka"
                  ? "hover:brightness-[0.8] cursor-pointer font-secondFont"
                  : "cursor-default"
              }`}
              onClick={() => changeLanguage("ka")}
              style={{
                opacity: language == "ka" ? 1 : 0.5,
                fontSize: "14px",
                color: theme.text,
              }}
            >
              ქართული
            </div>

            <div
              className={` ${
                language !== "ru"
                  ? "hover:brightness-[0.8] cursor-pointer font-secondFont"
                  : "cursor-default"
              }`}
              onClick={() => changeLanguage("ru")}
              style={{
                opacity: language === "ru" ? 1 : 0.5,
                fontSize: "14px",
                color: theme.text,
              }}
            >
              Русский
            </div>
          </div>
          <div
            style={{ transition: "ease-in 300ms" }}
            className="flex items-center gap-2 hover:text-[#135A68]"
            onClick={() => setOpenMenu(false)}
          >
            {!isMobile && (
              <h3 className="font-secondFont text-[20px]">CLOSE</h3>
            )}
            <TfiClose size={32} />
          </div>
        </div>
        <div className="flex relative">
          {!isMobile && (
            <div className="w-1/2 p-8 pl-16 relative">
              <h1
                style={{ lineHeight: "72px" }}
                className="font-mineFont text-[90px] text-white w-1/2"
              >
                {language === "ru"
                  ? "ДАВАЙТЕ ТВОРИТЬ"
                  : language === "ka"
                  ? "დაიწყეთ შექმნა"
                  : "LET'S CREATE"}
              </h1>
              <div className="mt-6 border-y-[1px] border-white w-1/2 font-secondFont p-4 flex flex-col gap-4">
                <h3 className="mb-2 text-xl font-secondFont">
                  TBILISI, GEORGIA
                </h3>
                <a
                  href="mailto:sarko.events@Gmail.com"
                  className="cursor-pointer flex items-center gap-2"
                  style={{ textDecoration: "underline", color: theme.text }}
                >
                  <MdEmail size={isMobile ? 24 : 32} color={theme.active} />{" "}
                  <span
                    className="text-md desktop:text-xl"
                    style={{ color: theme.text }}
                  >
                    Sarko.events@gmail.com
                  </span>
                </a>
                <div
                  className="cursor-pointer flex items center gap-2"
                  style={{ textDecoration: "underline", color: theme.text }}
                >
                  <FaMobileButton
                    size={isMobile ? 24 : 32}
                    color={theme.active}
                  />
                  <div
                    className="text-md desktop:text-xl"
                    style={{ color: theme.text }}
                  >
                    <a
                      href="tel:+995599205588"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      +995599205588
                    </a>
                  </div>
                </div>
              </div>

              <div
                onClick={(e) => e.stopPropagation()}
                className="mt-4 flex items-center gap-4"
              >
                <a
                  href="fb://profile/61562564296082"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook color={theme.text} size={isMobile ? 24 : 20} />
                </a>
                <a
                  href="instagram://user?username=sarko_events"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram color={theme.text} size={isMobile ? 24 : 20} />
                </a>
                {/* <a
            href="https://www.tiktok.com/@sarko.events"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok color={theme.text} size={20} />
          </a>
          <a
            href="vnd.youtube://www.youtube.com/channel/UC0Fwr1O2Imxpc6mf-PhZwyg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube color={theme.text} size={20} />
          </a> */}
                <a
                  href="tg://resolve?domain=DG3IK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram color={theme.text} size={isMobile ? 24 : 20} />
                </a>
                <a
                  href="whatsapp://send?phone=+995599205588"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp color={theme.text} size={isMobile ? 24 : 20} />
                </a>
                {/* <a
            href="linkedin://in/sarko-events-21438531a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color={theme.text} size={20} />
          </a> */}
                <a
                  href="mailto:sarko.events@Gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdEmail color={theme.text} size={isMobile ? 28 : 24} />
                </a>
              </div>
            </div>
          )}
          {!isMobile && <div className="w-[1px] h-full bg-white" />}
          <div
            className="w-full desktop:w-1/2"
            onClick={() => setOpenMenu(false)}
          >
            <div className="flex flex-col w-full">
              {menuItems.map((item: any, index: number) => {
                return (
                  <Link
                    className={`w-full p-6 ${
                      index === menuItems?.length - 1
                        ? "none"
                        : "border-b-[1px]"
                    } border-white`}
                    href={item.path}
                    key={item.path}
                  >
                    <p
                      style={{
                        color:
                          pathname === item.path ? theme.active : theme.text,
                        transition: "ease-in 300ms",
                      }}
                      className={`font-secondFont text-2xl desktop:text-3xl  cursor-pointer hover:opacity-[1] ${
                        pathname === item.path ? "opacity-1" : "opacity-[0.5]"
                      }`}
                    >
                      {item.label}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {isMobile && (
          <div className="w-full p-4 relative border-t-[1px] border-white">
            <h3 className="mb-4 text-md font-secondFont">TBILISI, GEORGIA</h3>
            <div className="border-white font-secondFont flex flex-col gap-4">
              <a
                href="mailto:sarko.events@Gmail.com"
                className="cursor-pointer flex items-center gap-2"
                style={{ textDecoration: "underline", color: theme.text }}
              >
                <MdEmail size={24} color={theme.active} />{" "}
                <span
                  className="text-md desktop:text-xl"
                  style={{ color: theme.text }}
                >
                  Sarko.events@gmail.com
                </span>
              </a>
              <div
                className="cursor-pointer flex items center gap-2"
                style={{ textDecoration: "underline", color: theme.text }}
              >
                <FaMobileButton
                  size={isMobile ? 24 : 32}
                  color={theme.active}
                />
                <div
                  className="text-md desktop:text-xl"
                  style={{ color: theme.text }}
                >
                  <a
                    href="tel:+995599205588"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    +995599205588
                  </a>
                </div>
              </div>
            </div>

            <div
              onClick={(e) => e.stopPropagation()}
              className="mt-4 flex items-center gap-4"
            >
              {/* <a
                href="fb://profile/61562564296082"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook color={theme.text} size={18} />
              </a> */}
              {/* <a
                href="instagram://user?username=sarko_events"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color={theme.text} size={18} />
              </a> */}
              {/* <a
            href="https://www.tiktok.com/@sarko.events"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok color={theme.text} size={20} />
          </a>
          <a
            href="vnd.youtube://www.youtube.com/channel/UC0Fwr1O2Imxpc6mf-PhZwyg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube color={theme.text} size={20} />
          </a> */}
              <a
                href="tg://resolve?domain=DG3IK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram color={theme.text} size={18} />
              </a>
              <a
                href="whatsapp://send?phone=+995599205588"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color={theme.text} size={18} />
              </a>
              {/* <a
            href="linkedin://in/sarko-events-21438531a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color={theme.text} size={20} />
          </a> */}
              <a
                href="mailto:sarko.events@Gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail color={theme.text} size={20} />
              </a>
            </div>
          </div>
        )}
        <div
          style={{ lineHeight: isMobile ? "90px" : "320px" }}
          className="text-[100px] desktop:text-[400px] z-[-1] pt-12 border-t-[1px] border-white  font-mineFont mt-[1px] w-full"
        >
          <span className="opacity-[0.1]">SARKO</span>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default Menu;
