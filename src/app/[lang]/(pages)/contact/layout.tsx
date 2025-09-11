import type { Metadata } from "next";
import { cookies } from "next/headers"; // 🔥 ენების წაკითხვა სერვერის მხარეს

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, string> = {
    en: "Contact Us – Start Planning Your Event Today | Sarko Events",
    ka: "დაგვიკავშირდი – დაგეგმე შენი ივენთი დღესვე | Sarko Events",
    ru: "Связаться с нами – Начните планировать своё мероприятие | Sarko Events",
  };

  const descriptions: Record<string, string> = {
    en: "Ready to create an unforgettable event? Get in touch for weddings, corporate events & more. Fast response and personalized service guaranteed!",
    ka: "გახდი ჩვენი შემდეგი კლიენტი! დაგვიკავშირდი ქორწილის, კორპორატიული ივენთის ან ნებისმიერი ღონისძიების დასაგეგმად – პასუხს მიიღებ სწრაფად!",
    ru: "Готовы к незабываемому мероприятию? Свяжитесь с нами для организации свадеб, корпоративов и других событий. Ответим быстро!",
  };

  return {
    title: titles[lang] || titles["en"],
    description: descriptions[lang] || descriptions["en"],
    openGraph: {
      title: titles[lang] || titles["en"],
      description: descriptions[lang] || descriptions["en"],
      url: "https://sarkoevents.com/en/contact",
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
