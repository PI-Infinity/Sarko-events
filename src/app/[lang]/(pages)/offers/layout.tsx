import type { Metadata } from "next";
import { cookies } from "next/headers"; // 🔥 ენების წაკითხვა სერვერის მხარეს

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, string> = {
    en: "Exclusive Event Packages | Sarko Events",
    ka: "ექსკლუზიური ივენთ პაკეტები | Sarko Events",
    ru: "Эксклюзивные пакеты мероприятий | Sarko Events",
  };

  const descriptions: Record<string, string> = {
    en: "Take advantage of our special offers and create a unique event at the best price! ✅ Book now and save time and resources!",
    ka: "სარგებლე სპეციალური შეთავაზებებით და შექმენი უნიკალური ღონისძიება უკეთეს ფასად! ✅ დაჯავშნე ახლა და დაზოგე დრო და რესურსები!",
    ru: "Воспользуйтесь специальными предложениями и создайте уникальное мероприятие по лучшей цене! ✅ Бронируйте сейчас и экономьте время и ресурсы!",
  };

  return {
    title: titles[lang] || titles["en"],
    description: descriptions[lang] || descriptions["en"],
    openGraph: {
      title: titles[lang] || titles["en"],
      description: descriptions[lang] || descriptions["en"],
      url: "https://sarkoevents.com/en/gallery/offers",
      type: "website",
      siteName: "Sarko Events",
      images: [
        {
          url: "/videocover.webp",
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

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main>{children}</main>;
}
