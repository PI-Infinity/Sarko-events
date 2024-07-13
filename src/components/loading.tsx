"use client";
import { useAppContext } from "@/context/app";
import { BarLoader } from "react-spinners";

export const Loading = () => {
  const { loading, theme } = useAppContext();

  return (
    <div
      style={{ display: loading ? "flex" : "none" }}
      className="text-textlight fixed w-full z-40 h-full flex-col items-center justify-center gap-4"
    >
      <h1 style={{ color: theme.text }} className="text-[20px] text-textlight">
        TP-Showcase
      </h1>
      <BarLoader
        height={6}
        width={200}
        color={theme.text}
        className="rounded-full"
      />
    </div>
  );
};
