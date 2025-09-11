import type { Metadata } from "next";
import { cookies } from "next/headers"; // 🔥 ენების წაკითხვა სერვერის მხარეს

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, string> = {
    en: "Privacy Policy – Your Data Is Safe With Us | Sarko Events",
    ka: "კონფიდენციალურობის პოლიტიკა – შენი მონაცემები დაცულია | Sarko Events",
    ru: "Политика конфиденциальности – ваши данные под защитой | Sarko Events",
  };

  const descriptions: Record<string, string> = {
    en: "We respect your privacy. Learn how we collect, store, and protect your personal information when using our services.",
    ka: "ჩვენ ვზრუნავთ შენს პირად მონაცემებზე. გაეცანი, როგორ ხდება ინფორმაციის დაცვა და შენახვა ჩვენს სისტემაში.",
    ru: "Мы ценим вашу конфиденциальность. Узнайте, как мы храним и обрабатываем ваши личные данные с полной безопасностью.",
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
