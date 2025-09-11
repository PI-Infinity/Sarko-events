"use client";
import Main from "@/components/main/main";
import { useAppContext } from "@/context/app";
import { usePathname } from "next/navigation";
import AcceptPopup from "@/components/accept-popup";

export default function Home() {
  const { loading, language } = useAppContext();
  const pathname = usePathname();

  return (
    <main
      style={{ display: loading ? "none" : "flex" }}
      className={`w-full flex-col items-centerm ${
        language === "ru" ? "font-geoFont" : "font-mineFont"
      }`}
    >
      <Main />

      <AcceptPopup />
    </main>
  );
}
