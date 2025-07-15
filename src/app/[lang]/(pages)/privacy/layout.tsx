import type { Metadata } from "next";
import { cookies } from "next/headers"; // 🔥 ენების წაკითხვა სერვერის მხარეს

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, string> = {
    en: "Privacy Policy | Sarko Events",
    ka: "კონფიდენციალურობის პოლიტიკა | Sarko Events",
    ru: "Политика конфиденциальности | Sarko Events",
  };

  const descriptions: Record<string, string> = {
    en: "Read our Privacy Policy to understand how we collect, use, and protect your personal data when you use Sarko Events.",
    ka: "წაიკითხეთ ჩვენი კონფიდენციალურობის პოლიტიკა, რომ გაიგოთ, როგორ ვაგროვებთ, ვიყენებთ და ვიცავთ თქვენს მონაცემებს Sarko Events-ის გამოყენებისას.",
    ru: "Прочитайте нашу политику конфиденциальности, чтобы узнать, как мы собираем, используем и защищаем ваши данные при использовании Sarko Events.",
  };

  return {
    title: titles[lang] || titles["en"],
    description: descriptions[lang] || descriptions["en"],
    openGraph: {
      title: titles[lang] || titles["en"],
      description: descriptions[lang] || descriptions["en"],
      url: "https://sarkoevents.com/en/privacy",
      type: "website",
      siteName: "Sarko Events",
      images: [
        {
          url: "/videocover.webp",
          width: 800,
          height: 600,
          alt: "Sarko Events Privacy Policy",
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
