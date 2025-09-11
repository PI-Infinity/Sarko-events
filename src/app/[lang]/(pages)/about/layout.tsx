import type { Metadata } from "next";
import { cookies } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის ამოღება ქუქიდან

  // 🔥 ენების მიხედვით სათაურები და აღწერები
  const titles: Record<string, string> = {
    en: "About Us – Why Choose Sarko Events for Your Special Day",
    ka: "ჩვენს შესახებ – ვინ ვართ ჩვენ და რატომ Sarko Events",
    ru: "О нас – почему выбирают Sarko Events для важных событий",
  };

  const descriptions: Record<string, string> = {
    en: "Get to know the team behind Georgia’s finest events. Experience, creativity & attention to detail – discover why clients trust Sarko Events!",
    ka: "აღმოაჩინე გუნდი, რომელიც ქმნის დაუვიწყარ ივენთებს. გამოცდილება, კრეატიულობა და თითოეულ დეტალზე ზრუნვა – გაიცანი Sarko Events ახლოდან!",
    ru: "Познакомьтесь с командой, создающей лучшие мероприятия в Грузии. Опыт, креатив и внимание к деталям – вот, что отличает нас!",
  };

  return {
    title: titles[lang] || titles["en"], // თუ ენა არასწორია, ნაგულისხმევი ინგლისურია
    description: descriptions[lang] || descriptions["en"],
    openGraph: {
      title: titles[lang] || titles["en"],
      description: descriptions[lang] || descriptions["en"],
      url: "https://sarkoevents.com/en/about",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
