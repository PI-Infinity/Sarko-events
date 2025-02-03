"use client";
import { useState } from "react";
import Button from "@/components/button";
import Img from "@/components/image";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { useEffect } from "react";
import { MdCalendarMonth } from "react-icons/md";

const Gallery = () => {
  const { theme, loading, activeLanguage, language } = useAppContext();

  const gallery = [
    {
      value: "minimum_care",
      img: "/iusticia.webp",
      label: {
        en: "Minimum care",
        ka: "მინიმალური ზრუნვა",
        ru: "МИНИМУМ ЗАБОТ",
      },
      description: {
        en: "VENUE OF THE CEREMONY - TBILISI HOUSE OF JUSTICE",
        ka: "ცერემონიის ჩატარების ადგილი - თბილისის იუსტიციის სახლი",
        ru: "МЕСТО ПРОВЕДЕНИЯ ЦЕРЕМОНИИ - ДОМ ЮСТИЦИИ ТБИЛИСИ",
      },
      price: 400,
      details: {
        en: [
          "Simple choice for those who value efficiency and minimalism.",
          "Ideal for official registration without extra hassle.",
          "Package includes:",
          "• Assistance with marriage registration or notarized power of attorney.",
          "• Ceremony at the House of Justice.",
          "• Marriage certificate on the same day.",
          "• Translation of the certificate with an apostille within 2 working days.",
          "• Transfer: Hotel - House of Justice - Hotel.",
          "• 24/7 agency support and personal curator.",
          "• Government fees and witnesses included.",
        ],
        ka: [
          "მარტივი არჩევანი მათთვის, ვინც აფასებს ეფექტურობას და მინიმალიზმს.",
          "იდეალური ვარიანტი ოფიციალური რეგისტრაციისთვის ზედმეტი სირთულეების გარეშე.",
          "პაკეტი მოიცავს:",
          "• ქორწინების რეგისტრაციის ან ნოტარიული მინდობილობის ორგანიზება.",
          "• ცერემონია იუსტიციის სახლში.",
          "• ქორწინების მოწმობა იმავე დღეს.",
          "• მოწმობის თარგმანი აპოსტილით 2 სამუშაო დღეში.",
          "• ტრანსფერი: სასტუმრო - იუსტიციის სახლი - სასტუმრო.",
          "• 24/7 სააგენტოს მხარდაჭერა და პირადი კურატორი.",
          "• სახელმწიფო მოსაკრებლები და მოწმეები შედის.",
        ],
        ru: [
          "Простой выбор для тех, кто ценит эффективность и минимализм.",
          "Идеально подходит для официальной регистрации без лишних хлопот.",
          "Пакет включает:",
          "• Сопровождение при подаче заявления или оформление доверенности.",
          "• Церемония в Доме Юстиции.",
          "• Свидетельство о браке в тот же день.",
          "• Перевод свидетельства с апостилем в течение 2 рабочих дней.",
          "• Трансфер: Отель - Дом Юстиции - Отель.",
          "• 24/7 поддержка агентства и персональный куратор.",
          "• Включены государственные пошлины и свидетели.",
        ],
      },
    },
    // {
    //   value: "elegant_ceremony",
    //   img: "/wedding_palace.webp",
    //   label: {
    //     en: "Elegant Ceremony",
    //     ka: "ელეგანტური ცერემონია",
    //     ru: "ЭЛЕГАНТНАЯ ЦЕРЕМОНИЯ",
    //   },
    //   description: {
    //     en: "VENUE OF THE CEREMONY - WEDDING PALACE",
    //     ka: "ცერემონიის ჩატარების ადგილი - ქორწილის სასახლე",
    //     ru: "МЕСТО ПРОВЕДЕНИЯ ЦЕРЕМОНИИ - ДВОРЕЦ БРАКОСОЧЕТАНИЙ",
    //   },
    //   price: 600,
    //   details: {
    //     en: [
    //       "For those who want an elegant and cozy ceremony.",
    //       "Package includes:",
    //       "• Assistance with marriage registration or notarized power of attorney.",
    //       "• Ceremony at the Wedding Palace.",
    //       "• Marriage certificate on the same day.",
    //       "• Translation of the certificate with an apostille within 2 working days.",
    //       "• Transfer: Hotel - Wedding Palace - Hotel.",
    //       "• Interpreter service during the ceremony (English/Russian).",
    //       "• Bride's bouquet and groom's boutonniere.",
    //       "• Bottle of sparkling wine and traditional sweets.",
    //       "• Musical accompaniment (without live music).",
    //       "• SIM card with unlimited internet for 7 days.",
    //       "• 24/7 agency support and personal curator.",
    //       "• Government fees and witnesses included.",
    //     ],
    //   },
    // },
    {
      value: "at_the_peak_of_love",
      img: "/mtatsimnda.webp",
      label: {
        en: "AT THE PEAK OF LOVE",
        ka: "სიყვარულის პიკზე",
        ru: "НА ВЕРШИНЕ ЛЮБВИ",
      },
      description: {
        en: "VENUE OF THE CEREMONY - MTATSMINDA PARK",
        ka: "ცერემონიის ჩატარების ადგილი - მთაწმინდის პარკი",
        ru: "МЕСТО ПРОВЕДЕНИЯ ЦЕРЕМОНИИ - ПАРК МТАЦМИНДА",
      },
      price: 900,
      details: {
        en: [
          "For those dreaming of a wedding with breathtaking views of Tbilisi and a romantic atmosphere.",
          "Package includes:",
          "• Assistance with marriage registration or notarized power of attorney.",
          "• Ceremony in the Wedding Hall of Mtatsminda Park.",
          "• Marriage certificate on the same day.",
          "• Translation of the certificate with an apostille within 2 working days.",
          "• Transfer: Hotel - Mtatsminda - Hotel.",
          "• Interpreter service during the ceremony (English/Russian).",
          "• Wedding decorations (arch and swings with artificial flowers, decorated table).",
          "• Bride's bouquet and groom's boutonniere.",
          "• 2 bottles of sparkling wine, traditional sweets, and waiter service.",
          "• Musical accompaniment (without live music).",
          "• SIM card with unlimited internet for 7 days.",
          "• Transfer: Airport - Hotel - Airport.",
          "• 24/7 agency support and personal curator.",
          "• Government fees and witnesses included.",
        ],
        ka: [
          "მათთვის, ვისაც სურს ქორწილი დაუვიწყარი ხედებითა და რომანტიკული ატმოსფეროთი.",
          "პაკეტი მოიცავს:",
          "• ქორწინების რეგისტრაციის ან ნოტარიული მინდობილობის ორგანიზება.",
          "• ცერემონია მთაწმინდის პარკის საქორწილო დარბაზში.",
          "• ქორწინების მოწმობა იმავე დღეს.",
          "• მოწმობის თარგმანი აპოსტილით 2 სამუშაო დღეში.",
          "• ტრანსფერი: სასტუმრო - მთაწმინდა - სასტუმრო.",
          "• თარჯიმნის მომსახურება ცერემონიის დროს (ინგლისური/რუსული).",
          "• სადღესასწაულო დეკორაციები (თაღი და საქანელები ხელოვნური ყვავილებით, მორთული მაგიდა).",
          "• პატარძლის თაიგული და სიძის ბუტონიერა.",
          "• 2 ბოთლი შუშხუნა ღვინო, ტრადიციული ტკბილეულობა და ოფიციანტის მომსახურება.",
          "• მუსიკალური გაფორმება (ცოცხალი მუსიკის გარეშე).",
          "• SIM ბარათი 7-დღიანი შეუზღუდავი ინტერნეტით.",
          "• ტრანსფერი: აეროპორტი - სასტუმრო - აეროპორტი.",
          "• 24/7 სააგენტოს მხარდაჭერა და პირადი კურატორი.",
          "• სახელმწიფო მოსაკრებლები და მოწმეები შედის.",
        ],
        ru: [
          "Для тех, кто мечтает о свадьбе с потрясающим видом на Тбилиси и романтической атмосферой.",
          "Пакет включает:",
          "• Сопровождение при подаче заявления или оформление доверенности.",
          "• Церемония в свадебном зале парка Мтацминда.",
          "• Свидетельство о браке в тот же день.",
          "• Перевод свидетельства с апостилем в течение 2 рабочих дней.",
          "• Трансфер: Отель - Мтацминда - Отель.",
          "• Услуги переводчика во время церемонии (английский/русский).",
          "• Свадебные декорации (арка и качели с искусственными цветами, украшенный стол).",
          "• Букет невесты и бутоньерка для жениха.",
          "• 2 бутылки игристого вина, традиционные сладости и обслуживание официантом.",
          "• Музыкальное сопровождение (без живой музыки).",
          "• SIM-карта с безлимитным интернетом на 7 дней.",
          "• Трансфер: Аэропорт - Отель - Аэропорт.",
          "• 24/7 поддержка агентства и персональный куратор.",
          "• Включены государственные пошлины и свидетели.",
        ],
      },
    },
    {
      value: "fairy_tale_garden",
      img: "/botanical.webp",
      label: {
        en: "FAIRY TALE GARDEN",
        ka: "ზღაპრული ბაღი",
        ru: "СКАЗОЧНЫЙ САД",
      },
      description: {
        en: "VENUE OF THE CEREMONY - TBILISI BOTANICAL GARDEN",
        ka: "ცერემონიის ჩატარების ადგილი - თბილისის ბოტანიკური ბაღი",
        ru: "МЕСТО ПРОВЕДЕНИЯ ЦЕРЕМОНИИ - БОТАНИЧЕСКИЙ САД",
      },
      price: 1000,
      details: {
        en: [
          "For those who dream of a magical wedding among nature.",
          "Package includes:",
          "• Assistance with marriage registration or notarized power of attorney.",
          "• Ceremony in the Botanical Garden.",
          "• Marriage certificate on the same day.",
          "• Translation of the certificate with an apostille within 2 working days.",
          "• Transfer: Hotel - Botanical Garden - Hotel.",
          "• Wedding decorations (arch, decorated chairs, decorated table).",
          "• Interpreter service during the ceremony (English/Russian).",
          "• 2 bottles of sparkling wine, traditional sweets, and waiter service.",
          "• Musical accompaniment (without live music).",
          "• SIM card with unlimited internet for 7 days.",
          "• 24/7 agency support and personal curator.",
          "• Government fees and witnesses included.",
        ],
      },
    },
    {
      value: "grandeur_of_the_moment",
      img: "/monument.webp",
      label: {
        en: "GRANDEUR OF THE MOMENT",
        ka: "მომენტის სიდიადე",
        ru: "ВЕЛИЧИЕ МОМЕНТА",
      },
      description: {
        en: "VENUE OF THE CEREMONY - MONUMENT OF THE CHRONICLES OF GEORGIA",
        ka: "ცერემონიის ჩატარების ადგილი - საქართველოს მემატიანე",
        ru: "МЕСТО ПРОВЕДЕНИЯ ЦЕРЕМОНИИ - МОНУМЕНТ ХРОНИКИ ГРУЗИИ",
      },
      price: 1100,
      details: {
        en: [
          "For those who want a ceremony in one of the most breathtaking locations in Georgia.",
          "Package includes:",
          "• Assistance with marriage registration or notarized power of attorney.",
          "• Ceremony at the Monument of the Chronicles of Georgia.",
          "• Marriage certificate on the same day.",
          "• Translation of the certificate with an apostille within 2 working days.",
          "• Wedding decorations (arch, decorated chairs, decorated table).",
          "• Interpreter service during the ceremony (English/Russian).",
          "• 2 bottles of sparkling wine, traditional sweets, and waiter service.",
          "• Musical accompaniment (without live music).",
          "• SIM card with unlimited internet for 7 days.",
          "• 24/7 agency support and personal curator.",
          "• Government fees and witnesses included.",
        ],
      },
    },
  ];

  const [openDetails, setOpenDetails] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
      <div className="w-full h-full flex-grow pt-[94px] desktop:pt-[120px] pb-8">
        <div
          style={{ display: loading ? "none" : "grid" }}
          className="slide-in-right w-full
     text-white gap-4
      px-2 grid-cols-1 desktop:grid-cols-3 desktop:px-[5%]"
        >
          {gallery?.map((item: any, index: number) => {
            return (
              <div
                onClick={() => setOpenDetails(item)}
                style={{ background: theme.background2 }}
                className="w-full shadow-sm rounded-xl flex items-center justify-center
           gap-4 relative h-[300px]"
                key={index}
              >
                <div className="relative overflow-hidden rounded-xl w-full h-full flex cursor-pointer hover:opacity-[0.9]">
                  <Img
                    src={item.img}
                    alt="img"
                    style={{
                      aspectRatio: 1,
                      zIndex: 0,
                      width: "100%",
                    }}
                  />
                </div>
                <strong className="rounded-md absolute top-4 right-4 py-1 px-3 bg-[rgba(0,0,0,0.5)] text-lg">
                  {item.price}$
                </strong>
                <div className="p-4 px-2 rounded-xl absolute bottom-4 left-4 flex flex-col gap-2 bg-[rgba(0,0,0,0.5)] max-w-[80%]">
                  <strong className=" px-3 text-lg">
                    {item.label[language]}
                  </strong>
                  <p className=" px-3 text-sm font-[600]">
                    {item.description[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden my-16 z-50 bg-[] w-full desktop:flex items-center justify-center px-4">
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
      {openDetails && (
        <div
          onClick={() => setOpenDetails(null)}
          className="cursor-pointer fixed inset-0 z-[100] flex justify-center items-center bg-[rgba(0,0,0,0.8)] backdrop-blur-[20px] transition-transform duration-300 ease-in-out"
        >
          {/* Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111] rounded-2xl shadow-lg max-w-4xl w-full h-auto max-h-[90vh] overflow-y-auto mx-4 p-6 relative flex flex-col"
          >
            {/* Close Button (Fixed Inside the Container) */}
            <div className="flex justify-end pb-4">
              <button
                onClick={() => setOpenDetails(null)}
                className="z-10 text-white bg-gray-800 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden w-full min-h-64 flex">
              <Img
                src={openDetails?.img}
                alt="img"
                style={{
                  aspectRatio: 1,
                  zIndex: 0,
                  width: "100%",
                }}
              />
            </div>

            {/* Details */}
            <div className="mt-6 text-start flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-white">
                {openDetails.label[language]}
              </h2>
              <p className="text-white">{openDetails.description[language]}</p>

              {/* Details List */}
              <ul className="text-white space-y-2">
                {openDetails.details[language].map((detail, i) => (
                  <li key={i} className="text-start">
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="w-[90px] flex justify-center text-xl font-semibold text-white bg-gray-800 px-4 py-2 rounded-lg">
                {openDetails.price}$
              </div>

              {/* Bottom Button (Stays Inside) */}
              <div className="mt-8 w-full flex items-center justify-start">
                <Link
                  href={"/contact?offer=" + openDetails?.value}
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
        </div>
      )}
    </div>
  );
};

export default Gallery;

<style>
  {`
    @keyframes slideIn {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `}
</style>;
