import type { Metadata } from "next";
import { cookies } from "next/headers"; // 🔥 ენების წაკითხვა სერვერის მხარეს

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, string> = {
    en: "Terms & Conditions | Sarko Events",
    ka: "წესები და პირობები | Sarko Events",
    ru: "Условия использования | Sarko Events",
  };

  const descriptions: Record<string, string> = {
    en: "Read our Terms & Conditions to understand the rules of using Sarko Events. Your rights and responsibilities explained in detail.",
    ka: "წაიკითხეთ ჩვენი წესები და პირობები, რათა გაიგოთ Sarko Events-ის გამოყენების წესები. აქ დეტალურადაა აღწერილი თქვენი უფლებები და ვალდებულებები.",
    ru: "Прочитайте наши условия использования, чтобы понять правила работы с Sarko Events. Ваши права и обязанности подробно объяснены.",
  };

  return {
    title: titles[lang] || titles["en"],
    description: descriptions[lang] || descriptions["en"],
    openGraph: {
      title: titles[lang] || titles["en"],
      description: descriptions[lang] || descriptions["en"],
      url: "https://sarkoevents.com/terms",
      type: "website",
      siteName: "Sarko Events",
      images: [
        {
          url: "/banner.webp",
          width: 800,
          height: 600,
          alt: "Sarko Events Terms & Conditions",
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
