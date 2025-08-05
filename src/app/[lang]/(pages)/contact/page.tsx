"use client";
import RequestForm from "@/components/request-form";
import { useAppContext } from "@/context/app";
import { useEffect } from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const { loading, isMobile, theme } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{ display: loading ? "none" : "flex" }}
      className="pt-4 desktop:pt-0 font-secondFont oveflow-hidden w-[100%] flex-col desktop:flex-row items-center desktop:items-start px-5 desktop:px-[5%] pb-16 desktop:pb-[24px]"
    >
      <div className="w-full desktop:w-1/3 flex justify-center">
        <RequestForm />
      </div>
      <div className="flex flex-col gap-4 desktop:gap-6 w-full desktop:w-1/3 relative desktop:top-24 desktop:left-24">
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
          <FaMobileButton size={isMobile ? 24 : 32} color={theme.active} />
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
        <div className="flex items-center gap-4 ml-[2px] mt-[2px]">
          <a
            href={isMobile ? "tg://resolve?domain=DG3IK" : "https://t.me/DG3IK"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram color={theme.text} size={isMobile ? 22 : 28} />
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
            <FaWhatsapp color={theme.text} size={isMobile ? 22 : 28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
