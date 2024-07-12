"use client";

import { useAppContext } from "@/context/app";
import PageSwitcher from "./pageSwitcher-mobile";

const Stack = () => {
  // app context
  const { loading, theme, skills } = useAppContext();

  return (
    <div className="flex-1 w-full flex items-center justify-center gap-2">
      {/* <PageSwitcher /> */}
      <div
        style={{
          display: loading ? "none" : "flex",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        className="fixed bottom-3 desktop:bottom-4 w-[94%] desktop:w-[90%]
    border-[1px] border-[rgba(255,255,255,0.1)] rounded-full
    p-2 overflow-hidden flex items-center
    shadow-md
    "
      >
        <div className="flex logos">
          <div className="logos-slide">
            {skills.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="mx-12 flex items-center justify-center gap-4"
                >
                  <h4
                    style={{ color: "#f7fbff" }}
                    className="font-custom font-[700]
              text-md whitespace-nowrap"
                  >
                    {item.id}
                  </h4>
                </div>
              );
            })}
          </div>
          <div className="logos-slide">
            {skills.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="mx-12 flex items-center justify-center gap-4"
                >
                  <h4
                    style={{ color: "#f7fbff" }}
                    className="font-custom font-[700]
              text-md whitespace-nowrap"
                  >
                    {item.id}
                  </h4>
                </div>
              );
            })}
          </div>
          <div className="logos-slide">
            {skills.map((item: any) => {
              return (
                <div
                  key={item.id}
                  style={{ color: "#f7fbff" }}
                  className="mx-12 flex items-center justify-center gap-4"
                >
                  <h4
                    className="font-custom font-[700]
              text-md whitespace-nowrap"
                  >
                    {item.id}
                  </h4>
                </div>
              );
            })}
          </div>
          <div className="logos-slide">
            {skills.map((item: any) => {
              return (
                <div
                  key={item.id}
                  style={{ color: "#f7fbff" }}
                  className="mx-12 flex items-center justify-center gap-4"
                >
                  <h4
                    className="font-custom font-[700]
              text-md whitespace-nowrap"
                  >
                    {item.id}
                  </h4>
                </div>
              );
            })}
          </div>
          <div className="logos-slide">
            {skills.map((item: any) => {
              return (
                <div
                  style={{ color: "#f7fbff" }}
                  key={item.id}
                  className="mx-12 flex items-center justify-center gap-4"
                >
                  <h4
                    className="font-custom font-[700]
              text-md text-textlight whitespace-nowrap"
                  >
                    {item.id}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
