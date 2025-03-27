import { Metadata } from "next";
import { cookies } from "next/headers";

type Props = {
  params: { id: string };
};

// 🔥 ენის მიხედვით `metadata`-ს დინამიური ცვლილება
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "en"; // 🔥 ენის წაკითხვა ქუქიდან

  const titles: Record<string, Record<string, string>> = {
    weddings: {
      en: "Dream Wedding Planning | Sarko Events",
      ka: "საოცნებო ქორწილების ორგანიზება | Sarko Events",
      ru: "Организация свадеб вашей мечты | Sarko Events",
    },
    corporations: {
      en: "Professional Corporate Events | Sarko Events",
      ka: "პროფესიონალური კორპორატიული ივენთები | Sarko Events",
      ru: "Профессиональные корпоративные мероприятия | Sarko Events",
    },
    presentations: {
      en: "Professional Presentation Planning | Sarko Events",
      ka: "პროფესიონალური პრეზენტაციების ორგანიზება | Sarko Events",
      ru: "Организация профессиональных презентаций | Sarko Events",
    },
    conferences: {
      en: "Professional Conference Planning | Sarko Events",
      ka: "პროფესიონალური კონფერენციების დაგეგმვა | Sarko Events",
      ru: "Профессиональная организация конференций | Sarko Events",
    },
    teambuildings: {
      en: "Stronger Team Connections | Sarko Events",
      ka: "მძლავრი გუნდური კავშირები | Sarko Events",
      ru: "Сильные командные связи | Sarko Events",
    },
    default: {
      en: "Unique Event Planning | Sarko Events",
      ka: "ყველა ტიპის ღონისძიებების ორგანიზება | Sarko Events",
      ru: "Организация любых мероприятий | Sarko Events",
    },
  };

  const descriptions: Record<string, Record<string, string>> = {
    weddings: {
      en: "Turn your wedding dreams into reality! 💖 Unique concepts, elegant designs, and impeccable service. Book your date today!",
      ka: "გააცოცხლე შენი ზღაპრული ქორწილის ოცნება! 💖 უნიკალური კონცეფციები, ელეგანტური დიზაინი და შეუდარებელი მომსახურება. დაჯავშნე დღე დღესვე!",
      ru: "Превратите свою свадьбу в сказку! 💖 Уникальные концепции, элегантный дизайн и безупречный сервис. Забронируйте дату уже сегодня!",
    },
    corporations: {
      en: "Break the routine and bring your team together! 🎯 Plan a unique corporate event, conference, or team-building experience with us.",
      ka: "განმუხტე სამუშაო გარემო და გააერთიანე გუნდი! 🎯 დაგეგმე უნიკალური კორპორატიული საღამო, კონფერენცია ან თიმ ბილდინგი ჩვენთან ერთად.",
      ru: "Разрядите рабочую атмосферу и сплотите коллектив! 🎯 Организуйте уникальный корпоративный вечер, конференцию или тимбилдинг с нами.",
    },
    presentations: {
      en: "Want to impress with your presentation? 🎯 We provide high-tech equipment and unique concepts. Plan a successful presentation today!",
      ka: "გსურს შთამბეჭდავი პრეზენტაცია? 🎯 ჩვენ ვუზრუნველყოფთ მაღალტექნოლოგიურ აღჭურვილობასა და უნიკალურ სცენარებს. დაგეგმე წარმატებული პრეზენტაცია!",
      ru: "Хотите впечатляющую презентацию? 🎯 Мы обеспечим высокотехнологичное оборудование и уникальный сценарий. Планируйте успешную презентацию!",
    },
    conferences: {
      en: "Host a flawless conference! 📢 Attention to detail, innovative technology, and perfect organization. Book today!",
      ka: "უზრუნველყავი შეუდარებელი კონფერენცია! 📢 დეტალებზე მაქსიმალური ყურადღება, ინოვაციური ტექნოლოგიები და სრულყოფილი დაგეგმარება! დაჯავშნე დღესვე",
      ru: "Обеспечьте идеальную конференцию! 📢 Максимальное внимание к деталям, инновационные технологии и безупречное планирование. Бронируйте уже сегодня!",
    },
    teambuildings: {
      en: "Organize an innovative team-building experience that strengthens collaboration! 🚀 Plan today and unite your team.",
      ka: "მოაწყე ინოვაციური თიმ ბილდინგი, რომელიც გააძლიერებს თანამშრომლობის სულისკვეთებას! 🚀 დაგეგმე დღესვე და გააერთიანე გუნდი.",
      ru: "Организуйте инновационный тимбилдинг, который усилит командный дух! 🚀 Планируйте сегодня и сплотите коллектив.",
    },
    default: {
      en: "Looking for a one-of-a-kind event? 🌟 We create themed parties, anniversaries, private celebrations, and more. Plan today!",
      ka: "გინდა უნიკალური და დაუვიწყარი ივენთი? 🌟 ჩვენ ვქმნით თემატურ ღონისძიებებს, იუბილეებს, კერძო წვეულებებს და სხვ. დაგეგმე დღესვე!",
      ru: "Хотите уникальное и незабываемое событие? 🌟 Мы создаем тематические вечеринки, юбилеи, частные праздники и многое другое. Запланируйте уже сегодня.",
    },
  };

  const idKey = params.id in titles ? params.id : "default";

  return {
    title: titles[idKey][lang] || titles[idKey]["en"],
    description: descriptions[idKey][lang] || descriptions[idKey]["en"],
    openGraph: {
      title: titles[idKey][lang] || titles[idKey]["en"],
      description: descriptions[idKey][lang] || descriptions[idKey]["en"],
      url: `https://sarkoevents.com/en/whatwecreate/${params.id}`,
      type: "website",
      siteName: "Sarko Events",
      images: [
        {
          url: "/banner.webp",
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

export default function Layout({ children }: any) {
  return <div className="flex-grow w-full overflow-hidden">{children}</div>;
}
