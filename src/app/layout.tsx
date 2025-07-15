import Header from "@/components/header";
import { Loading } from "@/components/loading";
import { AppContextWrapper } from "@/context/app";
import type { Metadata } from "next";
import { cookies } from "next/headers"; // 🔥 ენების წაკითხვა სერვერის მხარეს
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/components/footer";
import Menu from "@/components/menu";
import Popup from "@/components/popup";
import { SmoothScrollWrapper } from "@/components/smoothScroll";

// 🔥 `generateMetadata()` სერვერის მხარეს ქმნის დინამიურ `metadata`
export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, string> = {
    en: "Premium Event Planning | Sarko Events",
    ka: "პრემიუმ ივენთების ორგანიზება | Sarko Events",
    ru: "Премиум организация мероприятий | Sarko Events",
  };

  const descriptions: Record<string, string> = {
    en: "Make your event unforgettable! 🎉 Sarko Events – corporate parties, weddings, conferences, team-building events, and more. Plan a unique event today! 📅",
    ka: "გახადე შენი ღონისძიება დაუვიწყარი! 🎉 Sarko Events – კორპორატიული საღამოები, ქორწილები, კონფერენციები, თიმ ბილდინგი და მეტი. დაგეგმე უნიკალური ივენთი დღესვე! 📅",
    ru: "Сделайте ваше мероприятие незабываемым! 🎉 Sarko Events – корпоративные вечеринки, свадьбы, конференции, тимбилдинги и многое другое. Планируйте уникальное событие уже сегодня! 📅",
  };

  return {
    title: titles[lang] || titles["en"],
    description: descriptions[lang] || descriptions["en"],
    openGraph: {
      title: titles[lang] || titles["en"],
      description: descriptions[lang] || descriptions["en"],
      url: "https://sarkoevents.shop",
      type: "website",
      siteName: "Sarko Events",
      images: [
        {
          url: "/sarko-logo.png",
          width: 800,
          height: 600,
          alt: "Sarko Events",
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      other: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          url: "/sarko-favicon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          url: "/sarko-favicon.png",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ background: "#000" }}>
        <AppContextWrapper>
          <SmoothScrollWrapper>
            <GoogleAnalytics gaId="G-PRTE7FTLBK" />
            {/* <Loading /> */}
            <Header />
            <Menu />
            <main className="flex-grow w-full">{children}</main>
            <Popup />
            <Footer />
          </SmoothScrollWrapper>
        </AppContextWrapper>
      </body>
    </html>
  );
}
