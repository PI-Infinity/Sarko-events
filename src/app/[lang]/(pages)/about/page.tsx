"use client";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";

const AboutUs = () => {
  const { theme, language, loading, activeLanguage } = useAppContext();
  return (
    <>
      <div
        className={`flex-1 pb-16 mt-20 ${
          language === "ru" ? "font-geoFont" : "font-secondFont"
        }`}
        style={{ color: theme.text, display: loading ? "none" : "flex" }}
      >
        <div className="w-full h-full px-4 py-4 pt-[24px] desktop:pt-[40px] flex flex-col items-center">
          <div className="flex w-full items-center justify-center gap-4 mb-4">
            <div className="relative overflow-hidden  w-full desktop:w-1/4 h-full flex items-center">
              <Img
                src={"/we.webp"}
                alt="img"
                style={{
                  aspectRatio: 1,
                  zIndex: 0,
                  width: "100%",
                }}
              />
            </div>
            <div className="hidden relative overflow-hidden  w-1/4 h-full desktop:flex items-center">
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
                          <li key={index} className="">
                            {i}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-md ">{item.description[language]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutUs;

const texts = [
  {
    title: {
      en: "Successful Events",
      ru: "Успешные мероприятия",
      ka: "წარმატებული ღონისძიებები",
    },
    description: {
      en: "Our team, which has been operating in Georgia and abroad for years, will help you make your dreams come true. Many successfully held events are proof of our professionalism and experience.",
      ru: "Наша команда, много лет работающая в Грузии и за рубежом, поможет вам воплотить ваши мечты в реальность. Множество успешно проведенных мероприятий — подтверждение нашего профессионализма и опыта.",
      ka: "ჩვენი გუნდი, რომელიც წლებია ოპერირებს საქართველოში და ფარგლებს გარეთ, დაგეხმარებათ თქვენი ოცნებების განხორციელებაში. მრავალი წარმატებით ჩატარებული ღონისძიება ჩვენი პროფესიონალიზმისა და გამოცდილების დასტურია.",
    },
    list: [],
  },
  {
    title: {
      en: "Operating in the global market",
      ru: "Работа на мировом рынке",
      ka: "ოპერირება მსოფლიოს ბაზარზე",
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
