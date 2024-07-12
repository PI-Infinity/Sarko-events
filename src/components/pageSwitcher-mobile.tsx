"use client";
import { useAppContext } from "@/context/app";
import React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const PageSwitcher = () => {
  // app context
  const { theme, activeNav, setActiveNav, loading } = useAppContext();

  return (
    <>
      {activeNav !== "about" && (
        <div
          className="rounded-full
      flex flex-col items-center justify-center desktop:hidden"
          style={{
            display: loading ? "none" : "flex",
          }}
        >
          <div
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.0.5)",
              transition: "ease-in 200ms",
            }}
            className="w-16 h-16 rounded-full border-[1px] border-[rgba(255,255,255,0.1)]
      shadow-md flex items-center justify-center cursor-pointer hover:opacity-[0.8]"
          >
            <IoMdArrowDropleft
              size={40}
              color={theme.fill}
              onClick={
                activeNav === "contact"
                  ? () => setActiveNav("skills")
                  : activeNav === "skills"
                  ? () => setActiveNav("components")
                  : activeNav === "components"
                  ? () => setActiveNav("projects")
                  : activeNav === "projects"
                  ? () => setActiveNav("offers")
                  : () => setActiveNav("about")
              }
            />
          </div>
        </div>
      )}
      {activeNav !== "contact" && (
        <div
          className={`rounded-full
      flex flex-col items-center justify-center desktop:hidden
      ${loading ? "hidden" : "flex"}`}
        >
          <div
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.0.5)",
              transition: "ease-in 200ms",
            }}
            onClick={() => window.scrollTo(0, 0)}
            className="w-16 h-16 rounded-full border-[1px] border-[rgba(255,255,255,0.1)]
      shadow-md flex items-center justify-center cursor-pointer hover:opacity-[0.8]"
          >
            <IoMdArrowDropright
              size={40}
              color={theme.fill}
              onClick={
                activeNav === "about"
                  ? () => setActiveNav("offers")
                  : activeNav === "offers"
                  ? () => setActiveNav("projects")
                  : activeNav === "projects"
                  ? () => setActiveNav("components")
                  : activeNav === "components"
                  ? () => setActiveNav("skills")
                  : () => setActiveNav("contact")
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PageSwitcher;
