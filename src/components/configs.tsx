"use client";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";

const Configs = () => {
  const pathname = usePathname();

  // app context
  const { theme, setTheme, loading, language, setLanguage, colors } =
    useAppContext();

  const handleChangeTheme = (value: any) => {
    setTheme(value);
    localStorage.setItem("tp-showcase:theme", JSON.stringify(value));
    document.documentElement.style.background = value.fill;
    document.body.style.background = value.gradient;
  };
  return (
    <div
      className={`fixed py-3 right-[3%] desktop:right-[5%] bottom-16 desktop:bottom-auto desktop:top-36 w-12 h-[69vh] desktop:h-[70vh] desktop:h-[70vh] rounded-full
      ${
        loading || pathname !== "/" ? "hidden" : "flex"
      } flex-col items-center justify-between 
      border-[1px] border-[rgba(255,255,255,0.1)]
      shadow-sm`}
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-3 h-full">
        {colors.map((item: any) => {
          return (
            <div
              onClick={() => handleChangeTheme(item)}
              key={item.id}
              style={{ background: item.active }}
              className={`scale-up w-7 h-7 rounded-full
${
  theme.id === item.id && "border-[2px]"
} border-textlight cursor-pointer hover:opacity-[0.9]`}
            />
          );
        })}
      </div>
      {/* <div className="flex flex-col items-center gap-2">
        <div
          className={` ${
            language !== "en"
              ? "hover:opacity-[0.8] cursor-pointer"
              : "cursor-default"
          }`}
        >
          <ReactCountryFlag
            className="emojiFlag"
            onClick={() => setLanguage("en")}
            countryCode="GB"
            style={{
              opacity: language === "en" ? 1 : 0.5,
              fontSize: 24,
            }}
            aria-label="GB"
          />
        </div>
        <div
          className={` ${
            language !== "ka"
              ? "hover:opacity-[0.8] cursor-pointer"
              : "cursor-default"
          }`}
        >
          <ReactCountryFlag
            className="emojiFlag"
            onClick={() => setLanguage("ka")}
            countryCode="GE"
            style={{
              opacity: language === "ka" ? 1 : 0.5,
              fontSize: 24,
            }}
            aria-label="Georgia"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Configs;
