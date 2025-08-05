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
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const { loading, theme, language, setLanguage, isMobile, activeLanguage } =
    useAppContext();
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
  return (
    <div
      style={{
        display: loading ? "none" : "flex",
        background: theme.background,
      }}
      className="z-40 px-[5%] pt-8 pb-6 w-full
      border-t-[1px] border-white
      flex-col z-10"
    >
      <div className="w-full flex flex-col desktop:flex-row desktop:items-center desktop:justify-between gap-12">
        <Link
          href={`/${language}`}
          className="desktop:w-1/3 pl-3 desktop:pl-0 flex items-center gap-4 cursor-pointer"
        >
          <div className="font-mineFont text-white text-4xl relative w-[100px] flex items-center justify-center">
            SARKO
          </div>
        </Link>
        <div className="flex flex-col gap-[16px] items-start desktop:items-center justify-center">
          {!pathname?.includes("contact") && (
            <div className="desktop:w-1/3 flex items-center desktop:justify-center gap-4 mt-4">
              {/* <a
              href={
                isMobile
                  ? "fb://profile/61562564296082"
                  : "https://www.facebook.com/profile.php?id=61562564296082"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook color={theme.text} size={isMobile ? 24 : 20} />
            </a> */}
              {/* <a
              href={
                isMobile
                  ? "instagram://user?username=sarko_events"
                  : "https://www.instagram.com/sarko_events"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color={theme.text} size={isMobile ? 24 : 20} />
            </a> */}
              {/* <a
            href={
              isMobile
                ? "https://www.tiktok.com/@sarko.events"
                : "https://www.tiktok.com/@sarko.events"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok color={theme.text} size={20} />
          </a> */}
              {/* <a
            href={
              isMobile
                ? "vnd.youtube://www.youtube.com/channel/UC0Fwr1O2Imxpc6mf-PhZwyg"
                : "https://www.youtube.com/channel/UC0Fwr1O2Imxpc6mf-PhZwyg"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube color={theme.text} size={20} />
          </a> */}
              <a
                href={
                  isMobile ? "tg://resolve?domain=DG3IK" : "https://t.me/DG3IK"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram color={theme.text} size={isMobile ? 20 : 20} />
              </a>
              <a
                href={
                  isMobile
                    ? "whatsapp://send?phone=+995599205588"
                    : "https://wa.me/+995599205588"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color={theme.text} size={isMobile ? 20 : 20} />
              </a>
              {/* <a
            href={
              isMobile
                ? "linkedin://in/sarko-events-21438531a"
                : "https://www.linkedin.com/in/sarko-events-21438531a"
            }
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
                <MdEmail color={theme.text} size={isMobile ? 23 : 24} />
              </a>
            </div>
          )}
          <div className="flex desktop:flex-row flex-col desktop:gap-[24px] gap-[8px]">
            <Link href={`/${language}/terms`} key="terms">
              <h6
                style={{
                  color: theme.text,
                  transition: "ease-in 300ms",
                  textDecoration: "underline",
                  fontSize: "12px",
                }}
                className={`cursor-pointer`}
              >
                {activeLanguage?.terms_rules_title}
              </h6>
            </Link>
            <Link href={`/${language}/privacy`} key="privacy">
              <h6
                style={{
                  color: theme.text,
                  transition: "ease-in 300ms",
                  textDecoration: "underline",
                  fontSize: "12px",
                }}
                className={`cursor-pointer hover:opacity-[1] opacity-1 
                `}
              >
                {activeLanguage?.privacy_policy}
              </h6>
            </Link>
          </div>
        </div>

        <div className="desktop:w-1/3 flex justify-end desktop:items-center flex-col desktop:flex-row gap-2 desktop:gap-8">
          <div
            onClick={() => changeLanguage("en")}
            style={{
              opacity: language === "en" ? 1 : 0.5,
              fontSize: "14px",
              color: theme.text,
            }}
            className={` ${
              language !== "en"
                ? "hover:brightness-[0.8] cursor-pointer"
                : "cursor-default"
            }`}
          >
            English
          </div>
          <div
            className={` ${
              language !== "ka"
                ? "hover:brightness-[0.8] cursor-pointer"
                : "cursor-default"
            }`}
            onClick={() => changeLanguage("ka")}
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
                ? "hover:brightness-[0.8] cursor-pointer"
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
