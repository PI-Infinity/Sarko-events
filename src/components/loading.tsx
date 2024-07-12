"use client";
import { useAppContext } from "@/context/app";
import { BarLoader } from "react-spinners";

export const Loading = () => {
  const { loading } = useAppContext();

  return (
    <div
      style={{ display: loading ? "flex" : "none" }}
      className="text-textlight fixed w-full z-40 h-full flex-col items-center justify-center gap-4"
    >
      <h1 className="text-[20px] text-textlight">TP-Showcase</h1>
      <BarLoader height={6} width={200} color="#fff" className="rounded-full" />
    </div>
  );
};
