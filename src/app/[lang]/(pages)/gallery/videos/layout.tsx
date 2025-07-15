import type { Metadata } from "next";
import { cookies } from "next/headers"; // 🔥 ენების წაკითხვა სერვერის მხარეს

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, string> = {
    en: "Everything for Unforgettable Events | Sarko Events",
    ka: "ყველაფერი დაუვიწყარი ივენთებისთვის | Sarko Events",
    ru: "Все для незабываемых мероприятий | Sarko Events",
  };

  const descriptions: Record<string, string> = {
    en: "Sarko Events offers premium event planning – weddings, corporate parties, team-building events, and more. Plan the best event with us!",
    ka: "Sarko Events გთავაზობთ პრემიუმ ივენთებს – ქორწილები, კორპორატიული საღამოები, თიმ ბილდინგი და მეტი. დაგეგმე საუკეთესო ღონისძიება ჩვენთან ერთად!",
    ru: "Sarko Events предлагает премиальные мероприятия – свадьбы, корпоративные вечеринки, тимбилдинги и многое другое. Планируйте лучшее событие вместе с нами!",
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
