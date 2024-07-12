"use client";
import { useAppContext } from "@/context/app";
import React, { useEffect } from "react";
import { MdDone } from "react-icons/md";

const Skills = () => {
  const { skills, theme, loading } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{ display: loading ? "none" : "flex" }}
      className="overflow-y-auto w-[100%] pb-[100px] desktop:pl-[13%] slide-in-right pt-[116px] desktop:pt-[216px] flex-col h-[90vh] desktop:flex-wrap gap-8"
    >
      {skills.map((item: any) => {
        return (
          <div key={item.id} className="mx-12 flex items-center gap-4">
            <h4
              style={{ color: theme.text }}
              className="font-custom font-[700] flex items-center gap-2 text-md text-textlight whitespace-nowrap"
            >
              <MdDone color={theme.text} size={24} />
              {item.id}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
