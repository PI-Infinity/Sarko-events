import type { Metadata } from "next";
import { cookies } from "next/headers"; // 🔥 ენების წაკითხვა სერვერის მხარეს

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, string> = {
    en: "Event Videos – Real Joy & Emotion | Sarko Events",
    ka: "ივენთების ვიდეო – დაუვიწყარი ემოციები | Sarko Events",
    ru: "Видео мероприятий – настоящие эмоции и радость | Sarko Events",
  };

  const descriptions: Record<string, string> = {
    en: "See how we create unforgettable moments. Watch videos for inspiration and ideas for your event!",
    ka: "გაიგე, როგორ ვაკეთებთ დაუვიწყარ ღონისძიებებს. ვიდეოებიდან შთაბეჭდილებები და ინსპირაცია შენი ივენთისთვის!",
    ru: "Смотрите, как мы создаём незабываемые события. Видео для вдохновения и идей вашего мероприятия!",
  };

  return {
    title: titles[lang] || titles["en"],
    description: descriptions[lang] || descriptions["en"],
    openGraph: {
      title: titles[lang] || titles["en"],
      description: descriptions[lang] || descriptions["en"],
      url: "https://sarkoevents.com/en/gallery/videos",
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
