"use client";
import Button from "@/components/button";
import RequestForm from "@/components/request-form";
import { useAppContext } from "@/context/app";
import { useEffect } from "react";
import { FaLinkedin, FaMobile } from "react-icons/fa";
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
      className="ovefflow-hidden w-[100%] slide-in-right pt-[116px] desktop:pt-[150px] flex-col items-center h-[100vh] px-8 gap-4 desktop:gap-8"
    >
      <div className="flex flex-col gap-4 w-1/3">
        <a
          href="mailto:Tornike.Pirtakhia@Gmail.com"
          className="cursor-pointer flex items-center gap-2"
          style={{ textDecoration: "underline", color: theme.text }}
        >
          <MdEmail size={isMobile ? 24 : 32} color={theme.active} />{" "}
          <h3 className="text-md desktop:text-xl" style={{ color: theme.text }}>
            Sarko.events@gmail.com
          </h3>
        </a>
        <a
          href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHjIwoDMKvnSAAAAZCihvVAHc0X9RgNI5llxtNO8w7l5eNNEruRoBtt1FvTg93soohFdTedci2hbl_OETM_jI2lm6l4sYRk8au_FM1D9nG-2CskdhwZCCCw8FMfTbxrZbSMhug=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftornike-pirtakhia-2b9b57201%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app"
          className="cursor-pointer flex items center gap-2"
          style={{ textDecoration: "underline", color: theme.text }}
        >
          <FaMobileButton size={isMobile ? 24 : 32} color={theme.active} />
          <h3 className="text-md desktop:text-xl" style={{ color: theme.text }}>
            <a
              href="tel:+995597233355"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              +995597233355
            </a>
          </h3>
        </a>
      </div>

      <div className="mt-8 w-1/3 flex justify-center pb-[100px]">
        <RequestForm />
      </div>
    </div>
  );
};

export default Contact;
