"use client";
import { useAppContext } from "@/context/app";
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const { loading, isMobile } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{ display: loading ? "none" : "flex" }}
      className="ovefflow-hidden w-[100%] desktop:pl-[40%] slide-in-right pt-[116px]  flex-col desktop:justify-center h-[100vh] px-8 flex-wrap gap-4 desktop:gap-8"
    >
      <a
        href="mailto:Tornike.Pirtakhia@Gmail.com"
        className="cursor-pointer flex items center gap-2"
        style={{ textDecoration: "underline", color: "#f7fbff" }}
      >
        <MdEmail size={isMobile ? 24 : 32} />{" "}
        <h3 className="text-md desktop:text-xl" style={{ color: "#f7fbff" }}>
          Tornike.Pirtakhia@Gmail.com
        </h3>
      </a>
      <a
        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHjIwoDMKvnSAAAAZCihvVAHc0X9RgNI5llxtNO8w7l5eNNEruRoBtt1FvTg93soohFdTedci2hbl_OETM_jI2lm6l4sYRk8au_FM1D9nG-2CskdhwZCCCw8FMfTbxrZbSMhug=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftornike-pirtakhia-2b9b57201%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app"
        className="cursor-pointer flex items center gap-2"
        style={{ textDecoration: "underline", color: "#f7fbff" }}
      >
        <FaLinkedin size={isMobile ? 24 : 32} />
        <h3 className="text-md desktop:text-xl" style={{ color: "#f7fbff" }}>
          Tornike Pirtakhia
        </h3>
      </a>
    </div>
  );
};

export default Contact;
