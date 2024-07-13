import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import React from "react";

const Cover = () => {
  const { loading, theme } = useAppContext();
  return (
    <div
      className="w-full h-[60vh] pt-4"
      style={{ display: loading ? "none" : "flex", color: theme.text }}
    >
      <div className="relative w-[100%] h-[60vh] flex items-center justify-center overflow-hidden bg-[rgba(255,255,255,0.1)] rounded-xl">
        <h1 className="text-2xl">Advertisement Banner</h1>
      </div>
    </div>
  );
};

export default Cover;
