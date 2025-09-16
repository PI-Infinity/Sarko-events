import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useAppContext } from "@/context/app";
import Link from "next/link";

export const Section5 = ({ sY }: any) => {
  const { scrollY } = useScroll();
  const { isMobile, language } = useAppContext();
  // ძირითადი მოძრაობის მაპირება — ზუსტად შენს ფორმულებზე დაყრდნობით
  const letterP = useTransform(
    scrollY,
    [isMobile ? 3200 : 5300, isMobile ? 4250 : 6300],
    [isMobile ? 10 : 15, isMobile ? -15 : -30],
    {
      ease: easeInOut,
    }
  );

  return (
    <div
      className="w-full flex flex-col h-[800px] items-center gap-24 justify-center"
      style={{
        position: "absolute",
        top: isMobile ? "3480px" : "5510px",
        textAlign: "center",
      }}
    >
      <div
        className={`flex flex-col text-white items-center gap-6 text-[32px] desktop:text-[108px] ${
          language === "ru"
            ? "font-geoFont text-[32px] desktop:text-[90px]"
            : "font-mineFont font-mineFont text-[32px] desktop:text-[108px]"
        }`}
      >
        <p
          style={{ lineHeight: isMobile ? "36px" : "80px" }}
          dangerouslySetInnerHTML={{
            __html:
              language === "ru"
                ? `ДЛЯ ТЕХ<br>
КТО ХОЧЕТ ПРЕВРАТИТЬ<br>
ИДЕЮ В НЕЧТО`
                : language === "ka"
                ? `ვისაც<br>
სურს<br>
დაუვიწყარი`
                : `FOR THOSE<br>
IN SEARCH OF<br>
UNFORGETTABLE`,
          }}
        />
      </div>
      <div
        className={`flex text-white justify-center items-center gap-2 desktop:gap-6  ${
          language === "ru"
            ? "font-geoFont text-[32px] desktop:text-[90px]"
            : "font-mineFont text-[32px] desktop:text-[108px]"
        }`}
        style={{ lineHeight: isMobile ? "24px" : "80px" }}
      >
        <p>{language === "ru" ? `Н` : language === "ka" ? "ტ" : "T"}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `Е` : language === "ka" ? "რ" : "R"}</p>
        </motion.div>
        <p>{language === "ru" ? `З` : language === "ka" ? "ა" : "A"}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `А` : language === "ka" ? "ნ" : "N"}</p>
        </motion.div>
        <p>{language === "ru" ? `Б` : language === "ka" ? "ს" : "S"}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `Ы` : language === "ka" ? "ფ" : "F"}</p>
        </motion.div>
        <p>{language === "ru" ? `В` : language === "ka" ? "ო" : "O"}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `А` : language === "ka" ? "რ" : "R"}</p>
        </motion.div>
        <p>{language === "ru" ? `Е` : language === "ka" ? "მ" : "M"}</p>
        <motion.div style={{ position: "relative", top: letterP }}>
          <p>{language === "ru" ? `М` : language === "ka" ? "ა" : ""}</p>
        </motion.div>
        <p>{language === "ru" ? `О` : language === "ka" ? "ც" : ""}</p>

        {language === "ru" ? (
          <motion.div style={{ position: "relative", top: letterP }}>
            <p>Е</p>
          </motion.div>
        ) : language === "ka" ? (
          <motion.div style={{ position: "relative", top: letterP }}>
            <p>ი</p>
          </motion.div>
        ) : (
          ""
        )}
        {language === "ru" ? <p>О</p> : language === "ka" ? <p>ა</p> : ""}
      </div>
      <p
        className={`${
          language === "ru"
            ? "font-geoFont text-md"
            : "font-secondFont text-[16px]"
        } text-white w-[90%] desktop:w-[600px] text-center`}
      >
        {language === "ru"
          ? `Вы приносите мечту — мы воплощаем её.
Смело. Элегантно. С заботой о каждой детали.
Мы превращаем идеи в события, к которым хочется возвращаться снова и снова`
          : language === "ka"
          ? `თქვენ გვიზიარებთ  ხედვას  — ჩვენ გარდავქმნით მას რეალობად. 
სითამამე, შეუფერხებელი თანამშრომლობა და ნატიფი შესრულება —
ჩვენ ვაქცევთ წარმოსახვას ყოვლისმომცველ, დაუვიწყარ მოგონებად.`
          : ` You bring the vision. Sarko brings the transformation. With bold
        creativity, deep collaboration, and execution that feels effortless — we
        turn imagination into immersive, unforgettable events.`}
      </p>
      {/* {isMobile && (
        <Link
          style={{ transition: "ease-in 300ms" }}
          href={`/${language}/capabilities`}
          className="hover:text-[#135A68] text-white p-2 z-10 flex items-center gap-3 relative bottom-[40px]"
        >
          <p className="text-[16px] tracking-wide">OUR CAPABILITIES</p>
          <HiArrowSmallRight size={32} />
        </Link>
      )} */}
    </div>
  );
};
