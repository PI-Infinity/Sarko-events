"use client";
import { useAppContext } from "@/context/app";
import { BarLoader } from "react-spinners";

export const Loading = () => {
  const { loading, theme } = useAppContext();

  return (
    <div
      style={{ display: loading ? "flex" : "none" }}
      className="fixed w-full z-40 h-full flex-col items-center justify-center gap-4"
    >
      <h1 style={{ color: theme.text }} className="text-[20px] font-bold">
        Sarko-Events
      </h1>
      <BarLoader
        height={6}
        width={200}
        color={theme.active}
        className="rounded-full"
      />
    </div>
  );
};
