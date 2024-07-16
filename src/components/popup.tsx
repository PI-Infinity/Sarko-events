"use client";

import { useAppContext } from "@/context/app";
import { useEffect } from "react";
import RequestForm from "./request-form";

const Popup = () => {
  // state
  const { active, setActive } = useAppContext();

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [active]);

  return (
    <div
      onClick={() => setActive(false)}
      className={`${
        active ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } flex w-full h-[100vh] fixed top-0 left-0 right-0 z-50 p-4
      transition-transform transition-opacity duration-200 ease-in-out overflow-y-auto`}
      style={{
        backdropFilter: "blur(100px)",
        WebkitBackdropFilter: "blur(100px)",
        pointerEvents: active ? "auto" : "none", // Prevent clicks when invisible
      }}
    >
      <div className="w-full flex-1">
        <RequestForm />
      </div>
    </div>
  );
};

export default Popup;
