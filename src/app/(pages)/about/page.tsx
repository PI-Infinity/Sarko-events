"use client";
import Button from "@/components/button";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { MdCalendarMonth } from "react-icons/md";
import { NextSeo } from "next-seo";
import Head from "next/head";

const AboutUs = () => {
  const { theme, language, loading, activeLanguage } = useAppContext();
  return (
    <>
      <div
        className="flex-1"
        style={{ color: theme.text, display: loading ? "none" : "flex" }}
      >
        <div
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))",
          }}
          className="fixed desktop:hidden bottom-0 left-0 py-6 z-50 bg-[] w-full mt-4 flex items-center justify-center px-4 desktop:mt-4"
        >
          <Link
            href="/contact"
            className=" h-12 w-full desktop:w-1/3 border-[1px] border-[rgba(255,255,255,0.2)] rounded-full"
          >
            <Button
              title={activeLanguage.startPlanning}
              background="rgba(255,255,255,1)"
              color={theme.background}
              onClick={() => undefined}
              icon={<MdCalendarMonth size={24} />}
            />
          </Link>
        </div>
        <div className="w-full h-full px-4 py-4 pt-[100px] slide-in-top flex flex-col items-center">
          <div className="flex w-full items-center justify-center gap-4 mb-4">
            <div className="relative overflow-hidden rounded-xl w-full desktop:w-1/4 h-full flex items-center">
              <Img
                src={"/we.jpeg"}
                alt="img"
                style={{
                  aspectRatio: 1,
                  zIndex: 0,
                  width: "100%",
                }}
              />
            </div>
            <div className="hidden relative overflow-hidden rounded-xl w-1/4 h-full desktop:flex items-center">
              <Img
                src={"/we2.jpg"}
                alt="img"
                style={{
                  aspectRatio: 1,
                  zIndex: 0,
                  width: "100%",
                }}
              />
            </div>
          </div>

          {texts.map((item: any, index: number) => {
            return (
              <div className="w-full desktop:max-w-[50%] mx-auto" key={index}>
                <div className="mt-4">
                  <h2 className="text-xl mb-2 font-semibold">
                    {item.title[language]}
                  </h2>
                  {item?.list[language] && (
                    <ul className="list-disc pl-5 text-md">
                      {item?.list[language].map((i: any, index: number) => {
                        return (
                          <li key={index} className="italic">
                            {i}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-md italic">{item.description[language]}</p>
                </div>
              </div>
            );
          })}
          <div className="hidden my-16 z-50 w-full desktop:flex items-center justify-center px-4">
            <Link
              href="/contact"
              className="h-12 w-full desktop:w-[400px] border-[1px] border-[rgba(255,255,255,0.2)] rounded-full"
            >
              <Button
                title={activeLanguage.startPlanning}
                background="rgba(255,255,255,1)"
                color={theme.background}
                onClick={() => undefined}
                icon={<MdCalendarMonth size={24} />}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

const texts = [
  {
    title: {
      en: "100+ Successful Events",
      ru: "100+ успешных мероприятий",
      ka: "100+ წარმატებული ღონისძიება",
    },
    description: {
      en: "Our team, which has been operating for over 8 years, will help you bring your dreams to life. Over 100 successfully held events are proof of our professionalism and experience.",
      ru: "Наша команда, работающая более 8 лет, поможет вам воплотить ваши мечты в реальность. Более 100 успешно проведенных мероприятий подтверждают наш профессионализм и опыт.",
      ka: "ჩვენი გუნდი, რომელიც ოპერირებს უკვე 8 წელიწადზე მეტი დროის განმავლობაში, დაგეხმარებათ თქვენი ოცნებების განხორციელებაში. 100-ზე მეტი წარმატებით ჩატარებული ღონისძიება ჩვენი პროფესიონალიზმისა და გამოცდილების დასტურია.",
    },
    list: [],
  },
  {
    title: {
      en: "8 Years of Operation in the Global Market",
      ru: "8 лет работы на мировом рынке",
      ka: "8 წელი ოპერირება მსოფლიოს ბაზარზე",
    },
    description: {
      en: "We work in the global market and offer our services in various countries. Our multifaceted experience ensures the best service anywhere in the world.",
      ru: "Мы работаем на мировом рынке и предлагаем наши услуги в различных странах. Наш многопрофильный опыт обеспечивает лучшее обслуживание в любой точке мира.",
      ka: "ჩვენ ვმუშაობთ გლობალურ ბაზარზე და ვთავაზობთ ჩვენს სერვისებს სხვადასხვა ქვეყნებში. ჩვენი მრავალპროფილური გამოცდილება უზრუნველყოფს საუკეთესო მომსახურებას მსოფლიოს ნებისმიერ წერტილში.",
    },
    list: [],
  },
  {
    title: {
      en: "Quality, Customer Requirements, and Innovations",
      ru: "Качество, требования клиентов и инновации",
      ka: "ხარისხი, მომხმარებლის მოთხოვნები და ინოვაციები",
    },
    description: {
      en: "Our main priority is high quality. We always consider customer requirements and strive to meet them with innovative approaches and the latest technologies. Our services are designed to make your event unique and unforgettable.",
      ru: "Наш главный приоритет - высокое качество. Мы всегда учитываем требования клиентов и стараемся удовлетворить их с помощью инновационных подходов и новейших технологий. Наши услуги предназначены для того, чтобы сделать ваше мероприятие уникальным и незабываемым.",
      ka: "ჩვენი მთავარი პრიორიტეტია მაღალი ხარისხი. ჩვენ ყოველთვის ვითვალისწინებთ მომხმარებლის მოთხოვნებს და ვცდილობთ მათ დაკმაყოფილებას ინოვაციური მიდგომებითა და უახლესი ტექნოლოგიებით. ჩვენი სერვისები გათვალისწინებულია, რომ თქვენი ღონისძიება იყოს უნიკალური და დაუვიწყარი.",
    },
    list: [],
  },
  {
    title: {
      en: "Multilingual Team",
      ru: "Многоязычная команда",
      ka: "მრავალენოვანი გუნდი",
    },
    description: {
      en: "Our team is multilingual, allowing us to better work with international clients. We are ready to provide comfortable and effective communication, regardless of the language you and your guests speak.",
      ru: "Наша команда многоязычная, что позволяет нам лучше работать с международными клиентами. Мы готовы обеспечить комфортное и эффективное общение, независимо от того, на каком языке говорите вы и ваши гости.",
      ka: "ჩვენი გუნდი მრავალენოვანია, რაც საშუალებას გვაძლევს უკეთესად ვიმუშაოთ საერთაშორისო მომხმარებლებთან. ჩვენ მზად ვართ უზრუნველვყოთ კომფორტული და ეფექტური კომუნიკაცია, მიუხედავად იმისა, თუ რომელ ენაზე საუბრობთ თქვენ და თქვენი სტუმრები.",
    },
    list: [],
  },
  {
    title: {
      en: "Cooperation with Us Means",
      ru: "Сотрудничество с нами означает",
      ka: "ჩვენთან თანამშრომლობა ნიშნავს",
    },
    description: {
      en: "Our goal is to make each event unique, memorable, and successful. Let's create the future of your event together!",
      ru: "Наша цель - сделать каждое мероприятие уникальным, запоминающимся и успешным. Давайте создадим будущее вашего мероприятия вместе!",
      ka: " ჩვენი მიზანია, თითოეული ღონისძიება იყოს უნიკალური, დასამახსოვრებელი და წარმატებული. მოდით, ერთად შევქმნათ მომავალი თქვენი ღონისძიებისთვის!",
    },
    list: {
      en: [
        "Professionalism at every stage",
        "High quality and attention to detail",
        "Individual approach to each client",
        "Innovative solutions that make your event stand out",
      ],
      ka: [
        "პროფესიონალიზმს ყველა ეტაპზე",
        "მაღალ ხარისხს და დეტალებისადმი ყურადღებას",
        "ინდივიდუალურ მიდგომას თითოეული მომხმარებლისადმი",
        "ინოვაციურ გადაწყვეტილებებს, რომლებიც თქვენს ღონისძიებას გამორჩეულს გახდის",
      ],
      ru: [
        "Профессионализм на каждом этапе",
        "Высокое качество и внимание к деталям",
        "Индивидуальный подход к каждому клиенту",
        "Инновационные решения, которые выделяют ваше мероприятие",
      ],
    },
  },
];
