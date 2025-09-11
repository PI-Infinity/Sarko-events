"use client";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import Masonry from "@mui/lab/Masonry";
import { Paper, styled } from "@mui/material";
import { MoonLoader } from "react-spinners";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../../../firebase";
import { OpenedImage } from "../openedImage";
import { ru } from "@/languages/list";

const Category = () => {
  const { theme, loading, gallery, language, isMobile } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menu: any = [
    {
      id: "weddings",
      title: { en: "WEDDINGS", ru: "СВАДЬБЫ", ka: "ქორწილები" },
      desc: {
        en: "Why are weddings so special to Sarko? It’s the rush of emotion, the growing anticipation, and the chance to craft a moment that feels timeless. There’s nothing quite like bringing your favorite people together for a beautiful celebration. Whatever your vision may be, Sarko will shape a setting that rises to the moment.",
        ru: "Почему свадьбы так важны для Сарко? Это буря эмоций, нарастающее предвкушение и возможность создать незабываемый момент. Нет ничего лучше, чем собрать любимых людей вместе на прекрасном празднике. Каким бы ни было ваше видение, Сарко создаст атмосферу, которая будет соответствовать моменту.",
        ka: "რატომ არის ქორწილები ასეთი განსაკუთრებული სარკოსთვის? ეს არის ემოციების მოზღვავება, მზარდი მოლოდინი და შესაძლებლობა, შექმნათ მომენტი, რომელიც მარადიულად იგრძნობა. არაფერია იმაზე უკეთესი, ვიდრე თქვენი საყვარელი ადამიანების ერთად შეკრება ლამაზი ზეიმისთვის. როგორიც არ უნდა იყოს თქვენი ხედვა, სარკო შექმნის გარემოს, რომელიც მომენტს შეესაბამება.",
      },
    },
    {
      id: "corporates",
      title: { en: "CORPORATES", ru: "КОРПОРАТИВЫ", ka: "კორპორაიტულები" },
      desc: {
        en: "Sarko transforms your company’s mission and vision into a vibrant, memorable experience. From brand launches and annual galas to team gatherings and retreats, we craft events that reflect your identity — all with the distinctive creativity that defines Sarko.",
        ru: "Sarko превратит миссию и видение вашей компании в яркое и запоминающееся событие. От презентаций брендов и ежегодных гала-вечеров до корпоративов и выездных мероприятий — мы создаём мероприятия, отражающие вашу индивидуальность, — и всё это с неповторимой креативностью, характерной для Sarko.",
        ka: "Sarko თქვენი კომპანიის მისიასა და ხედვას ცოცხალ, დასამახსოვრებელ გამოცდილებად გარდაქმნის. ბრენდის პრეზენტაციებიდან და ყოველწლიური გალა-ღონისძიებებიდან დაწყებული გუნდური შეკრებებითა და რეტრიტებით დამთავრებული, ჩვენ ვქმნით ღონისძიებებს, რომლებიც ასახავს თქვენს იდენტობას — ყველაფერი ეს იმ გამორჩეული კრეატიულობით, რომელიც Sarko-ს განსაზღვრავს.",
      },
    },
    {
      id: "teambuildings",
      title: { en: "TEAMBUILDINGS", ru: "ТИМБИЛДИНГИ", ka: "თიმბილდინგი" },
      desc: {
        en: "Sarko reimagines team-building as something truly meaningful — and memorable. Through thoughtfully designed experiences, we spark collaboration, strengthen connections, and bring your team together in ways that last far beyond the day itself.",
        ru: "Sarko переосмысливает тимбилдинг как нечто по-настоящему значимое и запоминающееся. Благодаря продуманному подходу мы стимулируем сотрудничество, укрепляем связи и объединяем вашу команду так, что это чувство сохраняется надолго.",
        ka: "სარკო გუნდის შექმნას ჭეშმარიტად მნიშვნელოვან და დასამახსოვრებელ რამედ წარმოაჩენს. გააზრებულად შექმნილი გამოცდილების მეშვეობით, ჩვენ ვავითარებთ თანამშრომლობას, ვაძლიერებთ კავშირებს და ვაერთიანებთ თქვენს გუნდს ისე, რომ ეს დღეზე მეტხანს გაგრძელდეს.",
      },
    },
    {
      id: "presentations",
      title: { en: "PRESENTATIONS", ru: "ПРЕЗЕНТАЦИИ", ka: "პრეზენტაციები" },
      desc: {
        en: "From keynote speeches to creative showcases, Sarko turns presentations into immersive experiences. We craft environments that elevate your message, captivate your audience, and reflect your brand with clarity and style.",
        ru: "От программных докладов до креативных презентаций — Sarko превращает презентации в захватывающие события. Мы создаём атмосферу, которая доносит ваше послание до слушателей, захватывает их и отражает ваш бренд с ясностью и стилем.",
        ka: "მთავარი გამოსვლებიდან შემოქმედებით ჩვენებებამდე, Sarko პრეზენტაციებს ინტერაქტიულ გამოცდილებად აქცევს. ჩვენ ვქმნით გარემოს, რომელიც აამაღლებს თქვენს გზავნილს, მოხიბლავს თქვენს აუდიტორიას და ასახავს თქვენს ბრენდს მკაფიოდ და სტილურად.",
      },
    },
  ];

  const pathname = usePathname();
  const page: any = pathname?.split("/")[pathname?.split("/")?.length - 1];

  const [load, setLoad] = useState(false);

  const [imageUrls, setImageUrls] = useState<any>([]);

  const getAllImagesFromFolder = async (folderPath: any) => {
    const listRef = ref(storage, folderPath); // e.g., 'presentations/'
    const res = await listAll(listRef);

    const urls = await Promise.all(
      res.items.map((itemRef) => getDownloadURL(itemRef))
    );
    setImageUrls(urls);

    return urls;
  };

  useEffect(() => {
    getAllImagesFromFolder(page);
  }, [page]);

  const [openedImage, setOpenedImage] = useState(null);

  return (
    <div
      className={`${
        language === "ru" ? "font-geoFont" : "font-secondFont"
      } mt-24 w-full z-0 desktop:px-[5%] pb-12 gap-12 flex-col`}
      style={{ color: theme.text, display: loading ? "none" : "flex" }}
    >
      <div className="w-full mt-6 px-[5%] desktop:px-[0] desktop:mt-12 flex flex-col gap-2 desktop:gap-2">
        <Link
          href={`/${language}/gallery`}
          className={`flex items-center gap-2 ${
            language === "ru" ? "font-geoFont" : "font-secondFont"
          }`}
        >
          <MdArrowBack size={32} />{" "}
          {language === "ka"
            ? "გალერეაში დაბრუნება"
            : language === "ru"
            ? "ВЕРНУТЬСЯ В ГАЛЕРЕЮ"
            : "BACK TO GALLERY"}
        </Link>
        <div>
          <h1
            className={`text-[32px] desktop:text-[96px] ${
              language === "ru" ? "font-geoFont" : "font-mineFont"
            } py-6`}
          >
            {language === "ka"
              ? menu?.find((i: any) => i.id === page)?.title.ka
              : language === "ru"
              ? menu?.find((i: any) => i.id === page)?.title.ru
              : menu?.find((i: any) => i.id === page)?.title.en}
          </h1>
          <p
            className={`text-[16px] desktop:w-1/2 ${
              language === "ru" ? "font-geoFont" : "font-secondFont"
            }`}
          >
            {language === "ka"
              ? menu?.find((i: any) => i.id === page)?.desc.ka
              : language === "ru"
              ? menu?.find((i: any) => i.id === page)?.desc.ru
              : menu?.find((i: any) => i.id === page)?.desc.en}
          </p>
        </div>
      </div>
      <div className="ml-[2%] desktop:ml-0">
        {!load && (
          <div className="w-full h-[400px] flex justify-center py-4">
            <MoonLoader size={24} color="white" />
          </div>
        )}
        <div style={{ opacity: load ? 1 : 0 }}>
          <Masonry columns={isMobile ? 2 : 4}>
            {imageUrls?.length > 0 &&
              imageUrls?.map((item: any, index: any) => {
                if (index === 10) {
                  return (
                    <div key={index}>
                      <img
                        className="cursor-pointer"
                        onClick={() => setOpenedImage(item)}
                        src={item}
                        onLoad={() => {
                          setTimeout(() => setLoad(true), 500);
                        }}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div key={index}>
                      <img
                        src={item}
                        className="cursor-pointer"
                        onClick={() => setOpenedImage(item)}
                      />
                    </div>
                  );
                }
              })}
          </Masonry>
        </div>
      </div>
      {openedImage && (
        <OpenedImage
          openedImage={openedImage}
          setOpenedImage={setOpenedImage}
        />
      )}
    </div>
  );
};

export default Category;
